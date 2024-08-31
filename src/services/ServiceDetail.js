import React from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import { useParams, useNavigate } from "react-router-dom";
import familyLawImage from "./../images/family law.png";
import employmentLawImage from "./../images/contract.png";
import criminalLawImage from "./../images/téléchargement.png";
import mediationImage from "./../images/mediation.png";

export default function ServiceDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const services = [
    {
      title: "Droit de la Famille",
      description:
        "Notre équipe offre un soutien juridique complet et personnalisé dans tous les aspects du droit de la famille, comprenant des conseils avisés et une représentation efficace. Nous comprenons que les affaires familiales peuvent être parmi les plus sensibles et émotionnellement complexes. C'est pourquoi nous nous engageons à traiter chaque dossier avec la plus grande attention et empathie. En matière de divorce, nous assistons nos clients tout au long du processus, en veillant à protéger leurs droits et à atteindre un règlement équitable, que ce soit à travers une négociation amiable ou, si nécessaire, par des procédures judiciaires. Lorsque des questions de garde d'enfants sont en jeu, notre priorité est toujours de servir au mieux les intérêts des enfants. Outre le divorce et la garde des enfants, nous traitons également d'autres domaines essentiels du droit de la famille, tels que les adoptions, la pension alimentaire, la protection contre la violence domestique, et les accords prénuptiaux et postnuptiaux. Chaque situation familiale est unique, et nous nous efforçons de fournir des conseils adaptés et de défendre vigoureusement les intérêts de nos clients.",
      image: familyLawImage,
      id: 1,
    },
    {
      title: "Droit du Travail",
      description:
        "Nous assistons nos clients dans divers problèmes de droit du travail, y compris le licenciement abusif, la discrimination, et le harcèlement. Nous offrons une assistance juridique complète à nos clients confrontés à des défis en matière de droit du travail. Notre expertise couvre une large gamme de situations, allant des licenciements abusifs, où nous nous battons pour garantir que les droits de nos clients soient respectés, aux cas de discrimination sur le lieu de travail, où nous œuvrons pour que chaque individu bénéficie d'un traitement équitable, indépendamment de sa race, de son sexe, de son âge ou de toute autre caractéristique protégée. Nous intervenons également dans les affaires de harcèlement, en veillant à ce que les victimes obtiennent la justice qu'elles méritent et que les environnements de travail deviennent plus sûrs et respectueux. Grâce à notre compréhension approfondie des lois du travail et à notre approche centrée sur les besoins du client, nous nous assurons que chaque cas est traité avec le plus grand sérieux, offrant des solutions juridiques adaptées et efficaces pour protéger les intérêts de nos clients.",
      image: employmentLawImage,
      id: 2,
    },
    {
      title: "Droit Pénal",
      description:
        "Nos avocats spécialisés en défense pénale ont une vaste expérience dans la défense des clients contre une large gamme d'accusations criminelles. Nous comprenons que faire face à des accusations pénales peut être une période extrêmement stressante, c'est pourquoi nous nous engageons à fournir un soutien juridique solide et fiable à chaque étape du processus. Que vous soyez confronté à des accusations de vol, de fraude, de violence, ou à d'autres infractions graves, notre équipe est là pour protéger vos droits et vous offrir la meilleure défense possible. Nous analysons chaque détail de votre affaire avec précision, en développant des stratégies de défense personnalisées pour obtenir les meilleurs résultats. En plus de la défense en salle d'audience, nous offrons des consultations préventives et des conseils juridiques pour aider à éviter les pièges juridiques et à gérer les risques potentiels. Notre priorité est de garantir que nos clients soient bien informés et préparés à chaque étape, tout en leur offrant une représentation rigoureuse et déterminée.",
      image: criminalLawImage,
      id: 3,
    },
    {
      title: "Services de Médiation",
      description:
        "Nous offrons des services de médiation pour aider les clients à résoudre les litiges en dehors des tribunaux, ce qui permet de gagner du temps et de réduire les coûts. La médiation est une méthode efficace pour parvenir à un accord mutuellement acceptable dans des situations de conflit. Notre équipe de médiateurs expérimentés facilite la communication entre les parties, en encourageant un dialogue ouvert et en aidant à clarifier les points de désaccord. Nous intervenons dans divers types de litiges, y compris les conflits commerciaux, familiaux et de voisinage, en veillant à ce que toutes les voix soient entendues et respectées. Le processus de médiation est conçu pour être moins formel et moins stressant qu'un procès, offrant aux parties une plus grande flexibilité pour trouver des solutions créatives. En tant que médiateurs impartiaux, notre rôle est d'aider les parties à explorer toutes les options possibles, en se concentrant sur des solutions gagnant-gagnant. Nos services de médiation sont adaptés à chaque situation, permettant de résoudre les litiges de manière rapide, confidentielle et rentable.",
      image: mediationImage,
      id: 4,
    },
  ];

  // Convert id from useParams to a number
  const serviceId = Number(id);
  const service = services.find((service) => service.id === serviceId);

  // Redirect to 404 if service is not found
  if (!service) {
    navigate("/404");
    return null;
  }

  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 relative">
          {/* Bouton de retour */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 left-0 mt-4 ml-4 bg-red-950 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
          >
            Retour
          </button>

          <div className="flex flex-col md:flex-row items-center mt-12">
            <div className="flex-1 p-8">
              <h1 className="text-4xl font-semibold mb-4">{service.title}</h1>
              <p className="text-lg text-gray-600 mb-6">
                Découvrez en détail notre service{" "}
                <strong>{service.title}</strong>, conçu pour répondre à vos
                besoins spécifiques.
              </p>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-600 mb-4">
                Pour plus d'informations ou pour planifier une consultation,
                n'hésitez pas à nous contacter.
              </p>
              {/* Bouton "Contactez-nous" */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-red-950 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors"
                >
                  Contactez-nous
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-3/4 md:w-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
