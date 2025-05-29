import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import { blogData } from "../data/blogData";
import { motion, AnimatePresence } from "framer-motion";


export default function Blog() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedSort, setSelectedSort] = useState("recent");
  const navigate = useNavigate();

  // Extract unique tags
  const allTags = useMemo(() => Array.from(new Set(blogData.flatMap(post => post.tags || []))), []);

  // Handle search input change (no debounce for instant results)
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Memoized filtered and sorted posts
  const filteredPosts = useMemo(() => {
    return blogData
      .filter(post =>
        (!search || 
          post.title.toLowerCase().includes(search.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(search.toLowerCase())
        ) &&
        (!selectedTag || (post.tags && post.tags.includes(selectedTag)))
      )
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return selectedSort === "recent" ? dateB - dateA : dateA - dateB;
      });
  }, [search, selectedTag, selectedSort]);

  // Text truncation utility
  const slicer = (text, size) => {
    return text && text.length > size ? `${text.slice(0, size - 3)}...` : text;
  };

  // Tag color palette (Microsoft-inspired colors)
  const tagColors = useMemo(() => {
    const palette = [
      "bg-red-950 text-white",
      "bg-teal-500 text-white",
      "bg-purple-600 text-white",
      "bg-gray-700 text-white",
      "bg-red-600 text-white",
    ];
    const map = {};
    allTags.forEach((tag, idx) => {
      map[tag] = palette[idx % palette.length];
    });
    return map;
  }, [allTags]);


 

  // Tri dynamique : importance seulement si aucun filtre/sort n'est actif, sinon trier par date puis nombre de tags
  const sortedPosts = useMemo(() => {
    // Si aucun filtre ni tri personnalisé, trier par importance puis date puis tags
    if (!search && !selectedTag && selectedSort === "recent") {
      return filteredPosts.slice().sort((a, b) => {
        if ((a.importance || 4) !== (b.importance || 4)) {
          return (a.importance || 4) - (b.importance || 4);
        }
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA.getTime() !== dateB.getTime()) {
          return dateB - dateA;
        }
        const tagsA = (a.tags ? a.tags.length : 0);
        const tagsB = (b.tags ? b.tags.length : 0);
        return tagsB - tagsA;
      });
    }
    // Sinon, trier par date (selon selectedSort), puis nombre de tags
    return filteredPosts.slice().sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (selectedSort === "recent") {
        if (dateA.getTime() !== dateB.getTime()) {
          return dateB - dateA;
        }
      } else {
        if (dateA.getTime() !== dateB.getTime()) {
          return dateA - dateB;
        }
      }
      const tagsA = (a.tags ? a.tags.length : 0);
      const tagsB = (b.tags ? b.tags.length : 0);
      return tagsB - tagsA;
    });
  }, [filteredPosts, search, selectedTag, selectedSort]);

  // Mapping pour la taille des cartes selon l'importance (1 = plus grand)
  const importanceGridClass = {
    1: "col-span-4 row-span-2",
    2: "col-span-2 row-span-2",
    3: "col-span-2 row-span-1",
    4: "col-span-1 row-span-1",
  };

  // Définition du mapping importanceStyles (doit être défini avant son utilisation)
  const importanceStyles = {
    1: {
      minHeight: '420px',
      maxHeight: '520px',
      padding: '2rem',
      title: 'text-2xl sm:text-3xl md:text-4xl',
      excerpt: 260,
    },
    2: {
      minHeight: '340px',
      maxHeight: '420px',
      padding: '1.5rem',
      title: 'text-xl sm:text-2xl md:text-3xl',
      excerpt: 200,
    },
    3: {
      minHeight: '260px',
      maxHeight: '340px',
      padding: '1.25rem',
      title: 'text-lg sm:text-xl md:text-2xl',
      excerpt: 140,
    },
    4: {
      minHeight: '200px',
      maxHeight: '260px',
      padding: '1rem',
      title: 'text-base sm:text-lg md:text-xl',
      excerpt: 90,
    },
  };

  // Reset filters
  const resetFilters = () => {
    setSearch("");
    setSelectedTag("");
    setSelectedSort("recent");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>{t('blog_seo_title')}</title>
        <meta name="description" content={t('blog_seo_description')} />
        <link rel="canonical" href="https://www.cabinet-daouda.com/blog" />
        <meta property="og:title" content={t('blog_seo_title')} />
        <meta property="og:description" content={t('blog_seo_description')} />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://www.cabinet-daouda.com/blog" />
      </Helmet>
      <Navbar />
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {t('blog')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
            {t('blog_intro')}
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <button
              onClick={() => setSelectedTag("")}
              className={`px-2 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold transition-colors ${
                !selectedTag ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label={t('show_all_tags')}
            >
              {t('all')}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-2 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold transition-colors ${
                  selectedTag === tag ? tagColors[tag] : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label={t('filter_by_tag', { tag })}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center sm:justify-end">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder={t('search_article')}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-950 bg-white w-full sm:w-48 md:w-64 shadow-sm text-sm sm:text-base"
              aria-label={t('search_by_title_or_content')}
            />
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white shadow-sm text-sm sm:text-base"
              aria-label={t('sort_articles')}
            >
              <option value="recent">{t('most_recent')}</option>
              <option value="oldest">{t('oldest')}</option>
            </select>
            <button
              onClick={resetFilters}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-950 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm sm:text-base"
              aria-label={t('reset_filters')}
            >
              {t('reset')}
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        
         
        
          <AnimatePresence>
            {sortedPosts.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-12 text-base sm:text-lg">
                {t('no_article_found')}
              </div>
            ) : (
              sortedPosts.map((post, index) => {
                // Sur mobile, toutes les cartes ont la même taille (importance ignorée)
                const isMobile = window.innerWidth < 640;
                const imp = isMobile ? 2 : (post.importance && importanceStyles[post.importance] ? post.importance : 2);
                const style = importanceStyles[imp];
                const gridClass = isMobile ? "col-span-1 row-span-1" : (importanceGridClass[imp] || importanceGridClass[2]);
                return (
                  <motion.div
                    key={`${post.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 flex flex-col bg-red-950 ${gridClass}`}
                    style={{ minHeight: style.minHeight, maxHeight: style.maxHeight }}
                  >
                    <img
                      src={post.image}
                      alt={t('image_for', { title: post.title })}
                      className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-500 opacity-60"
                      loading="lazy"
                    />
                    <div className={`relative z-10 flex flex-col flex-1 bg-gradient-to-t from-black/80 to-transparent`} style={{ padding: style.padding }}>
                      {imp === 1 && (
                        <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-red-100 text-red-950 text-[10px] sm:text-xs font-semibold rounded-full mb-2 sm:mb-3">
                          {t('featured')}
                        </span>
                      )}
                      <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                        {post.tags?.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold ${tagColors[tag]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2
                        className={`${style.title} font-bold mb-1 sm:mb-2 cursor-pointer text-white hover:text-red-200 transition-colors drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
                        onClick={() => navigate(`/blog/${post.id}`)}
                        role="link"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            navigate(`/blog/${post.id}`);
                          }
                        }}
                      >
                        {slicer(post.title, 50)}
                      </h2>
                      <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4 flex-1 drop-shadow-lg">
                        {slicer(post.excerpt, style.excerpt)}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-gray-200 text-xs sm:text-sm">{post.date}</span>
                        <button
                          onClick={() => navigate(`/blog/${post.id}`)}
                          className="text-white font-medium bg-red-950 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-red-800 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
                          aria-label={t('read_article', { title: post.title })}
                        >
                          {t('read_more')}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
}