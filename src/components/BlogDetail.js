import React, { useEffect, useReducer, useCallback, lazy, Suspense, useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import "./style.css"
import { format, parse } from "date-fns";
import { fr } from "date-fns/locale"; // Import French locale
import bootverif from "./../images/bootverif.webp";
import { blogData, recentBlogs, relatedBlogs, initialComments } from "../data/blogData";
import { useTranslation } from "react-i18next";


// gerer le fait que les blog soit traduit ou non

// Lazy load images
const LazyImage = lazy(() => import("./LazyImage"));

// Reducer for comment form state
const commentReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMMENT":
      return { ...state, comment: action.payload };
    case "TOGGLE_BOLD":
      return { ...state, isBold: !state.isBold };
    case "TOGGLE_ITALIC":
      return { ...state, isItalic: !state.isItalic };
    case "SET_SUBMITTING":
      return { ...state, isSubmitting: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "RESET":
      return { ...state, comment: "", error: null };
    default:
      return state;
  }
};

// Reusable components extracted for better organization
const BlogCard = React.memo(({ blog }) => (
  <li className="mb-6 flex items-center gap-4 transition-transform hover:scale-[1.02]">
    <div className="w-16 h-16 flex-shrink-0">
      <Suspense fallback={<div className="w-16 h-16 bg-gray-200 animate-pulse rounded-lg" />}>
        <LazyImage
          src={blog.image}
          alt={blog.title}
          className="w-16 h-16 object-cover rounded-lg"
          loading="lazy"
        />
      </Suspense>
    </div>
    <Link
      to={`/blog/${blog.id}`}
      className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 flex-grow"
      aria-label={`Lire l'article : ${blog.title}`}
    >
      {blog.title}
    </Link>
  </li>
));

// Nouvelle composante pour le rendu des références
const ReferencesList = React.memo(({ references }) => (
  <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold mb-4">Références</h2>
    {references && references.length > 0 ? (
      <ul className="divide-y">
        {references.map((ref, index) => (
          <li key={index} className="py-3">
            <a
              href={ref.url}
              className="text-red-500 hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">{index + 1}.</span>
              <span>{ref.title || ref.url}</span>
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            {ref.description && <p className="text-gray-600 text-sm ml-6">{ref.description}</p>}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">Aucune référence disponible.</p>
    )}
  </section>
));

// Extracted Sidebar component with scroll functionality
const Sidebar = React.memo(({ recentBlogs, relatedBlogs, recentlyViewed, recentlyAdded, references, tableOfContents }) => (
  <aside className="lg:w-1/4  scrollable  h-screen space-y-8 sticky top-24 overflow-y-auto pb-8 pr-0 hide-scrollbar">
  

    {/* Table des matières */}
    {tableOfContents && tableOfContents.length > 0 && (
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Table des matières</h2>
        <nav>
          <ul className="space-y-2">
            {tableOfContents.map((section, index) => (
              <li key={index}>
                <a
                  href={`#section-${section.id}`}
                  className="text-red-500 hover:underline block py-1"
                >
                  {section.title}
                </a>
                {section.subsections && section.subsections.length > 0 && (
                  <ul className="pl-4 space-y-1 mt-1">
                    {section.subsections.map((subsection, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={`#subsection-${section.id}-${subIndex}`}
                          className="text-gray-600 hover:underline block py-1 text-sm"
                        >
                          {subsection.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </section>
    )}

    {/* Références */}
    {references && references.length > 0 && (
      <ReferencesList references={references} />
    )}

    <section className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Articles Récents</h2>
      <ul className="space-y-4">
        {recentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </section>

    <section className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Articles Connexes</h2>
      <ul className="space-y-4">
        {relatedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </section>

    <section className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Récemment Consultés</h2>
      {recentlyViewed.length > 0 ? (
        <ul className="space-y-4">
          {recentlyViewed.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Aucun article consulté récemment.</p>
      )}
    </section>

    <section className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Récemment Ajoutés</h2>
      <ul className="space-y-4">
        {recentlyAdded.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </section>
  </aside>
));

// Nouvelles composantes pour les sections de blog avec différentes dispositions d'images
const ImageLeft = React.memo(({ image, alt, children }) => (
  <div className="flex flex-col md:flex-row gap-6 my-8">
    <div className="md:w-1/3">
      <Suspense fallback={<div className="w-full aspect-square bg-gray-200 animate-pulse rounded-lg" />}>
        <LazyImage
          src={image}
          alt={alt}
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
      </Suspense>
    </div>
    <div className="md:w-2/3 prose prose-lg">{children}</div>
  </div>
));

const ImageRight = React.memo(({ image, alt, children }) => (
  <div className="flex flex-col md:flex-row gap-6 my-8">
    <div className="md:w-2/3 prose prose-lg">{children}</div>
    <div className="md:w-1/3">
      <Suspense fallback={<div className="w-full aspect-square bg-gray-200 animate-pulse rounded-lg" />}>
        <LazyImage
          src={image}
          alt={alt}
          className="w-full  object-cover rounded-full float-left  shape-image"
          loading="lazy"
        />
      </Suspense>
    </div>
  </div>
));

const ImageTop = React.memo(({ image, alt, children }) => (
  <div className="flex flex-col gap-6 my-8">
    <div className="w-full">
      <Suspense fallback={<div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />}>
        <LazyImage
          src={image}
          alt={alt}
          className="w-full h-64 rounded-lg object-cover"
          loading="lazy"
        />
      </Suspense>
    </div>
    <div className="prose prose-lg">{children}</div>
  </div>
));

const ImageBottom = React.memo(({ image, alt, children }) => (
  <div className="flex flex-col gap-6 my-8">
    <div className="prose prose-lg">{children}</div>
    <div className="w-full">
      <Suspense fallback={<div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />}>
        <LazyImage
          src={image}
          alt={alt}
          className="w-full h-64 rounded-lg object-cover"
          loading="lazy"
        />
      </Suspense>
    </div>
  </div>
));

const ImageCenter = React.memo(({ image, alt, children }) => (
  <div className="flex flex-col gap-6 my-8 items-center">
    <div className="w-2/3 mx-auto">
      <Suspense fallback={<div className="w-full aspect-square bg-gray-200 animate-pulse rounded-lg" />}>
        <LazyImage
          src={image}
          alt={alt}
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
      </Suspense>
    </div>
    <div className="prose prose-lg">{children}</div>
  </div>
));

const TwoColumns = React.memo(({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
    {React.Children.map(children, (child, index) => (
      <div key={index} className="prose prose-lg">{child}</div>
    ))}
  </div>
));

// Composante pour afficher une section de contenu
const ContentSection = React.memo(({ section, index }) => {
  const renderContentBlock = (contentBlock, contentIndex) => {
    // Handle case where contentBlock is a string (fallback for malformed data)
    if (typeof contentBlock === "string") {
      return (
        <p
          key={contentIndex}
          className={contentIndex === 0 && index === 0 ? "first-letter:text-3xl first-letter:font-bold first-letter:ml-10" : ""}
        >
          {contentBlock}
        </p>
      );
    }

    // Handle case where contentBlock is missing or invalid
    if (!contentBlock || typeof contentBlock !== "object") {
      return null;
    }

    switch (contentBlock.type) {
      case "highlight":
        return (
          <div key={contentIndex} className="bg-yellow-100 p-4 rounded-lg my-4">
            <p className="text-gray-800">{contentBlock.text}</p>
          </div>
        );
      case "list":
        return (
          <ul key={contentIndex} className="list-disc pl-6 my-4">
            {contentBlock.items?.map((item, i) => (
              <li key={i} className="text-gray-600">{item}</li>
            ))}
          </ul>
        );
      case "definitionList":
        return (
          <dl key={contentIndex} className="my-4">
            {contentBlock.items?.map((item, i) => (
              <div key={i} className="mb-2">
                <dt className="font-semibold text-gray-800">{item.term}</dt>
                <dd className="text-gray-600 ml-4">{item.definition}</dd>
              </div>
            ))}
          </dl>
        );
      case "table":
        return (
          <div key={contentIndex} className="overflow-x-auto my-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  {contentBlock.headers?.map((header, i) => (
                    <th key={i} className="border p-2 text-left">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contentBlock.rows?.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, j) => (
                      <td key={j} className="border p-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "procedure":
        return (
          <div key={contentIndex} className="my-4">
            <h4 className="text-lg font-semibold mb-2">{contentBlock.title}</h4>
            <ol className="list-decimal pl-6">
              {contentBlock.steps?.map((step, i) => (
                <li key={i} className="text-gray-600">{step}</li>
              ))}
            </ol>
          </div>
        );
      case "timeline":
        return (
          <div key={contentIndex} className="my-4">
            <h4 className="text-lg font-semibold mb-2">Chronologie</h4>
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              {contentBlock.events?.map((event, i) => (
                <div key={i} className="mb-6 relative">
                  <div className="absolute -left-4 w-3 h-3 bg-red-500 rounded-full"></div>
                  <h5 className="font-semibold">{event.period || event.phase}</h5>
                  <p className="text-gray-600">{event.event || event.description}</p>
                  {event.description && !event.event && (
                    <p className="text-gray-500 text-sm">{event.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "comparison":
        return (
          <div key={contentIndex} className="my-4">
            <h4 className="text-lg font-semibold mb-2">{contentBlock.title}</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Aspect</th>
                    <th className="border p-2 text-left">Médiation</th>
                    <th className="border p-2 text-left">Justice</th>
                  </tr>
                </thead>
                <tbody>
                  {contentBlock.criteria?.map((criterion, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border p-2">{criterion.aspect}</td>
                      <td className="border p-2">{criterion.mediation}</td>
                      <td className="border p-2">{criterion.justice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "principlesList":
        return (
          <ul key={contentIndex} className="list-disc pl-6 my-4">
            {contentBlock.principles?.map((principle, i) => (
              <li key={i} className="mb-2">
                <span className="font-semibold">{principle.name} :</span>{" "}
                {principle.description}
              </li>
            ))}
          </ul>
        );
      case "legalBases":
        return (
          <div key={contentIndex} className="my-4">
            <h4 className="text-lg font-semibold mb-2">Bases Légales</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contentBlock.bases?.map((base, i) => (
                <div key={i} className="border p-4 rounded-lg">
                  <h5 className="font-semibold">{base.name}</h5>
                  <p className="text-sm text-gray-500">{base.article}</p>
                  <p className="text-gray-600">{base.description}</p>
                  {base.examples && (
                    <ul className="list-disc pl-6 mt-2">
                      {base.examples.map((example, j) => (
                        <li key={j} className="text-gray-600">{example}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "rightsTable":
        return (
          <div key={contentIndex} className="overflow-x-auto my-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Droit</th>
                  <th className="border p-2 text-left">Articles</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-left">Modalités</th>
                  <th className="border p-2 text-left">Délai</th>
                </tr>
              </thead>
              <tbody>
                {contentBlock.rights?.map((right, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border p-2">{right.right}</td>
                    <td className="border p-2">{right.articles}</td>
                    <td className="border p-2">{right.description}</td>
                    <td className="border p-2">{right.modalites}</td>
                    <td className="border p-2">{right.delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "sanctionsScale":
        return (
          <div key={contentIndex} className="my-4">
            <h4 className="text-lg font-semibold mb-2">Échelle des Sanctions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contentBlock.categories?.map((category, i) => (
                <div key={i} className="border p-4 rounded-lg">
                  <h5 className="font-semibold">{category.level}</h5>
                  <p className="text-gray-600">Montant : {category.amount}</p>
                  <p className="text-gray-600">Violations : {category.violations.join(", ")}</p>
                  {category.examples && (
                    <ul className="list-disc pl-6 mt-2">
                      {category.examples.map((example, j) => (
                        <li key={j} className="text-gray-600">{example}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "maritimeZones":
        return (
          <div key={contentIndex} className="overflow-x-auto my-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Zone</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-left">Régime</th>
                  <th className="border p-2 text-left">Largeur</th>
                </tr>
              </thead>
              <tbody>
                {contentBlock.zones?.map((zone, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border p-2">{zone.name}</td>
                    <td className="border p-2">{zone.description}</td>
                    <td className="border p-2">{zone.regime}</td>
                    <td className="border p-2">{zone.width}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "conventionsList":
        return (
          <ul key={contentIndex} className="list-disc pl-6 my-4">
            {contentBlock.conventions?.map((convention, i) => (
              <li key={i} className="mb-2">
                <span className="font-semibold">{convention.name} ({convention.year})</span>
                <p className="text-gray-600">Portée : {convention.scope}</p>
                <p className="text-gray-500 text-sm">Statut : {convention.status}</p>
              </li>
            ))}
          </ul>
        );
      case "safetyRequirements":
        return (
          <div key={contentIndex} className="my-4">
            <h4 className="text-lg font-semibold mb-2">Exigences de Sécurité</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contentBlock.categories?.map((category, i) => (
                <div key={i} className="border p-4 rounded-lg">
                  <h5 className="font-semibold">{category.domain}</h5>
                  <ul className="list-disc pl-6">
                    {category.requirements.map((req, j) => (
                      <li key={j} className="text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case "infoBox":
      case "warningBox":
        return (
          <div
            key={contentIndex}
            className={`p-4 rounded-lg my-4 ${
              contentBlock.type === "infoBox" ? "bg-blue-100" : "bg-red-100"
            }`}
          >
            <p className="text-gray-800">{contentBlock.text}</p>
          </div>
        );
      case "definition":
        return (
          <div key={contentIndex} className="my-4">
            <h4 className="font-semibold">{contentBlock.term}</h4>
            <p className="text-gray-600">{contentBlock.content}</p>
          </div>
        );
      case "imageLeft":
        return (
          <ImageLeft key={contentIndex} image={contentBlock.image} alt={contentBlock.imageAlt || "Image illustrative"}>
            {contentBlock.text}
          </ImageLeft>
        );
      case "imageRight":
        return (
          <ImageRight key={contentIndex} image={contentBlock.image} alt={contentBlock.imageAlt || "Image illustrative"}>
            {contentBlock.text}
          </ImageRight>
        );
      case "imageTop":
        return (
          <ImageTop key={contentIndex} image={contentBlock.image} alt={contentBlock.imageAlt || "Image illustrative"}>
            {contentBlock.text}
          </ImageTop>
        );
      case "imageBottom":
        return (
          <ImageBottom key={contentIndex} image={contentBlock.image} alt={contentBlock.imageAlt || "Image illustrative"}>
            {contentBlock.text}
          </ImageBottom>
        );
      case "imageCenter":
        return (
          <ImageCenter key={contentIndex} image={contentBlock.image} alt={contentBlock.imageAlt || "Image illustrative"}>
            {contentBlock.text}
          </ImageCenter>
        );
      case "twoColumns":
        return (
          <TwoColumns key={contentIndex}>
            <div dangerouslySetInnerHTML={{ __html: contentBlock.column1 }} />
            <div dangerouslySetInnerHTML={{ __html: contentBlock.column2 }} />
          </TwoColumns>
        );
      case "subsection":
        return (
          <div key={contentIndex} id={`subsection-${section.id}-${contentIndex}`} className="ml-6 mb-8 scroll-mt-24">
            <h3 className="text-2xl font-semibold mb-4">{contentBlock.title}</h3>
            <div className="prose prose-lg text-gray-600">
              {contentBlock.content?.map((subContentBlock, subContentIndex) =>
                renderContentBlock(subContentBlock, subContentIndex)
              )}
            </div>
          </div>
        );
      default:
        return (
          <p
            key={contentIndex}
            className={contentIndex === 0 && index === 0 ? "first-letter:text-3xl first-letter:font-bold first-letter:ml-10" : ""}
          >
            {contentBlock.text || "Contenu non spécifié"}
          </p>
        );
    }
  };

  return (
    <section id={`section-${section.id}`} className="mb-12 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2">{section.title}</h2>
      {section.content && (
        <div className="prose prose-lg text-gray-600 mb-6">
          {section.content.map((contentBlock, contentIndex) => renderContentBlock(contentBlock, contentIndex))}
        </div>
      )}
    </section>
  );
});


// Main BlogDetail component
const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
   const {t}= useTranslation()
  const [state, dispatch] = useReducer(commentReducer, {
    comment: "",
    isBold: false,
    isItalic: false,
    isSubmitting: false,
    error: null,
  });
  
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [comments, setComments] = useState(initialComments);

  const defaultPost = useMemo(() => ({
    id: 0,
    title: "Article introuvable",
    image: bootverif,
    contenu: "Contenu introuvable ou supprimé par l'administrateur...",
    reference: "#",
    author: "Système",
    date: format(new Date(), "dd MMMM yyyy", { locale: fr }),
    excerpt: "",
    references: [],
    sections: [],
  }), []);

  // Load recently viewed blogs from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("recentlyViewed");
      if (stored) {
        const viewed = JSON.parse(stored);
        const viewedBlogs = viewed
          .map((blogId) => blogData.find((post) => post.id === parseInt(blogId)))
          .filter(Boolean)
          .slice(0, 3); // Limit to 3
        setRecentlyViewed(viewedBlogs);
      }
    } catch (error) {
      console.error("Error loading recently viewed blogs:", error);
    }
  }, []);

  // Load recently added blogs
  useEffect(() => {
    try {
      const sortedBlogs = [...blogData]
        .sort((a, b) => {
          const dateA = parse(a.date, "dd MMMM yyyy", new Date(), { locale: fr });
          const dateB = parse(b.date, "dd MMMM yyyy", new Date(), { locale: fr });
          return dateB - dateA;
        })
        .slice(0, 3); // Limit to 3
      setRecentlyAdded(sortedBlogs);
    } catch (error) {
      console.error("Error sorting blogs by date:", error);
      setRecentlyAdded(recentBlogs); // Fallback to static recent blogs
    }
  }, []);

  // Fetch blog post and update recently viewed
  useEffect(() => {
    const fetchBlogPost = async () => {
      setIsLoading(true);
      try {
        const blogId = parseInt(id);
        const foundPost = blogData.find((post) => post.id === blogId);
        
        if (foundPost) {
          // Si le blog n'a pas de sections structurées, on en crée à partir du contenu
          if (!foundPost.sections || foundPost.sections.length === 0) {
            const paragraphs = foundPost.contenu.split('\n\n');
            
            // Créer une section par défaut avec tout le contenu
            foundPost.sections = [{
              id: 1,
              title: "Contenu principal",
              content: paragraphs.map((text) => ({ text })),
            }];
          }
          
          // Si le blog n'a pas de références structurées mais a une référence simple
          if ((!foundPost.references || foundPost.references.length === 0) && foundPost.reference) {
            foundPost.references = [{
              url: foundPost.reference,
              title: "Source principale",
            }];
          }
          
          setBlogPost(foundPost);
          
          // Update recently viewed in local storage
          try {
            const stored = localStorage.getItem("recentlyViewed");
            let viewed = stored ? JSON.parse(stored) : [];
            viewed = [blogId, ...viewed.filter((id) => id !== blogId)].slice(0, 3);
            localStorage.setItem("recentlyViewed", JSON.stringify(viewed));
            
            const viewedBlogs = viewed
              .map((blogId) => blogData.find((post) => post.id === parseInt(blogId)))
              .filter(Boolean);
            setRecentlyViewed(viewedBlogs);
          } catch (error) {
            console.error("Error updating recently viewed:", error);
          }
        } else {
          setBlogPost(defaultPost);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        dispatch({ type: "SET_ERROR", payload: "Erreur lors du chargement de l'article" });
        setBlogPost(defaultPost);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [id, defaultPost]);

  // Créer une table des matières à partir des sections
  const tableOfContents = useMemo(() => {
    if (!blogPost || !blogPost.sections) return [];
    
    return blogPost.sections.map(section => ({
      id: section.id,
      title: section.title,
      subsections: section.subsections ? section.subsections.map(sub => ({
        title: sub.title,
      })) : [],
    }));
  }, [blogPost]);
 

  // Use a loading skeleton to improve user experience
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4 bg-white rounded-lg shadow-lg p-8">
              <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg mb-6"></div>
              <div className="h-10 bg-gray-200 animate-pulse rounded mb-4 w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
              </div>
            </div>
            <div className="lg:w-1/4 space-y-8">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="h-6 bg-gray-200 animate-pulse rounded mb-4 w-1/2"></div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 animate-pulse rounded-lg"></div>
                        <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blogPost) {
    return navigate("/404");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className=" mx-auto px-4 py-16">
        <div className="container flex flex-col lg:flex-row gap-8">
        
          {/* Main Content */}
          <article className="lg:w-3/4 bg-white rounded-lg shadow-lg p-8">
              <button
                      onClick={() => navigate(-1)}
                      className="relative m-4 bg-red-950 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
                    >
                      {t('back')}
            </button>
            <div className="relative w-full h-64 mb-6">
               
              <Suspense fallback={<div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />}>
                <LazyImage
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="eager" // Load main image eagerly
                />
              </Suspense>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
            
            {/* Métadonnées de l'article */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{blogPost.date}</span>
                <span className="text-green-500 ml-1" aria-hidden="true">✔</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{blogPost.author}</span>
                <span className="text-green-500 ml-1" aria-hidden="true">✔</span>
              </div>
              {blogPost.reference && (
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <a
                    href={blogPost.reference}
                    className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Lien vers la source de l'article : ${blogPost.title}`}
                  >
                    Source
                  </a>
                  <span className="text-green-500 ml-1" aria-hidden="true">✔</span>
                </div>
              )}
            </div>

            {/* Contenu structuré avec sections */}
            {blogPost.sections && blogPost.sections.map((section, index) => (
              <ContentSection key={section.id} section={section} index={index} />
            ))}

            {/* Bouton de contact */}
            <div className="border-t pt-4 mt-8">
              <button
                onClick={() => navigate("/contact")}
                className="bg-red-950 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors"
                aria-label="Nous contacter"
              >
                Contactez-nous
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <Sidebar
            recentBlogs={recentBlogs}
            relatedBlogs={relatedBlogs}
            recentlyViewed={recentlyViewed}
            recentlyAdded={recentlyAdded}
            references={blogPost.references || []}
            tableOfContents={tableOfContents}
          />
        </div>

        {/* Comments Section */}
       
       <div className=" container pt-3 ">
       {/* <section className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Commentaires</h2>
          <CommentForm state={state} dispatch={dispatch} handleSubmit={handleSubmit} />
          <ul className="space-y-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))
            ) : (
              <p className="text-gray-500">Aucun commentaire pour le moment.</p>
            )}
          </ul>
        </section> */}
       </div>
      </main>
    
      <Footer />
    </div>
  );
};

export default React.memo(BlogDetail);
