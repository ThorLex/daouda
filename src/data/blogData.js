// src/data/blogData.js
import famille from "../images/famille2.jpeg";
import travailleur from "../images/travailleur.jpg";
import mediation from "../images/mediation-en-ligne-avocat.jpg";
import data from "../images/protectiondata.jpg"; // Corrected typo from "portectiondata.jpg"
import ship from "../images/maritime1.jpg";
import ship2 from "../images/maritime2.jpg";
import ship3 from "../images/maritime3.jpg";
// Placeholder imports for new images (replace with actual files)
import ohada from "../images/ohada.jpg";
import customary from "../images/customary.png";
import environment from "../images/environnement.jpg";

export const blogData = [
  {
    id: 1,
    title: "Comprendre le Droit de la Famille au Cameroun",
    excerpt: "Explorez les principes du droit de la famille au Cameroun, mêlant droit civil, coutumier et influences internationales pour protéger vos proches.",
    date: "29 Août 2024",
    image: famille,
    author: "Maître Daouda Mbouobouo",
    readTime: "18 min",
    category: "Droit Civil",
    tags: ["famille", "mariage", "divorce", "filiation", "coutume"],
    sections: [
      {
        id: 1,
        title: "Introduction au Droit de la Famille",
        content: [
          {
            text: "Le droit de la famille au Cameroun est un domaine hybride, combinant le droit civil hérité du Code civil français, les coutumes locales et les obligations internationales, notamment la Convention sur l'élimination de toutes les formes de discrimination à l'égard des femmes (CEDAW). Il régit le mariage, la filiation, le divorce et l'autorité parentale."
          },
          {
            type: "highlight",
            text: "Le pluralisme juridique camerounais permet la coexistence du droit civil (francophone) et du droit coutumier, particulièrement dans les zones rurales, créant une richesse mais aussi une complexité unique."
          }
        ]
      },
      {
        id: 2,
        title: "Le Mariage : Civil, Coutumier et Polygamique",
        content: [
          {
            text: "Le Cameroun reconnaît trois formes de mariage : civil, coutumier et religieux, chacun avec des implications juridiques distinctes. La polygamie est autorisée sous certaines conditions, notamment dans le cadre coutumier."
          },
          {
            type: "subsection",
            title: "Le Mariage Civil",
            content: [
              {
                text: "Régi par l’Ordonnance n° 81-02 du 29 juin 1981 portant organisation de l’état civil, le mariage civil est obligatoire pour la reconnaissance légale. Il exige le consentement libre, un âge minimum (15 ans pour les femmes, 17 pour les hommes avec dérogation) et l’enregistrement à l’état civil."
              },
              {
                type: "list",
                items: [
                  "Célébration devant un officier d’état civil",
                  "Publication des bans pendant 30 jours",
                  "Présence de deux témoins majeurs",
                  "Établissement d’un acte de mariage"
                ]
              }
            ]
          },
          {
            type: "subsection",
            title: "Le Mariage Coutumier",
            content: [
              {
                text: "Prédominant dans les communautés rurales, le mariage coutumier varie selon les groupes ethniques (Bamileke, Beti, Peul, etc.). Il implique souvent une dot et des rites traditionnels, mais doit être enregistré pour être juridiquement reconnu."
              },
              {
                type: "warningBox",
                text: "Un mariage coutumier non enregistré peut compliquer les droits successoraux et la protection des enfants."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Le Divorce et la Séparation",
        content: [
          {
            text: "Le divorce au Cameroun peut être prononcé pour faute, rupture de la vie commune ou consentement mutuel, mais les tribunaux privilégient la réconciliation, surtout dans les contextes coutumiers."
          },
          {
            type: "subsection",
            title: "Procédures de Divorce",
            content: [
              {
                type: "definitionList",
                items: [
                  {
                    term: "Divorce pour faute",
                    definition: "Basé sur des motifs graves (adultère, violence, abandon) prouvés devant le tribunal."
                  },
                  {
                    term: "Divorce par consentement mutuel",
                    definition: "Accord des époux sur la rupture et ses conséquences, nécessitant un avocat."
                  },
                  {
                    term: "Rupture de vie commune",
                    definition: "Séparation de fait prolongée (2 ans minimum) constatée judiciairement."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Filiation et Autorité Parentale",
        content: [
          {
            text: "La filiation établit le lien juridique entre parents et enfants, influençant les droits successoraux et l’autorité parentale. Le droit coutumier privilégie parfois la lignée paternelle, tandis que le droit civil garantit l’égalité."
          },
          {
            type: "subsection",
            title: "Reconnaissance de la Filiation",
            content: [
              {
                text: "La filiation légitime découle du mariage, tandis que la filiation naturelle nécessite une reconnaissance volontaire ou judiciaire. Les enfants nés hors mariage ont les mêmes droits depuis la réforme de 2006."
              },
              {
                type: "infoBox",
                text: "L’article 31 de l’Ordonnance de 1981 garantit l’égalité des droits pour tous les enfants, abolissant la distinction entre enfants légitimes et naturels."
              }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Régimes Matrimoniaux",
        content: [
          {
            text: "Le régime par défaut est la communauté de biens, mais les époux peuvent opter pour la séparation de biens via un contrat notarié. Le droit coutumier peut compliquer la gestion des biens dans les mariages polygamiques."
          },
          {
            type: "table",
            headers: ["Régime", "Principes", "Avantages", "Inconvénients"],
            rows: [
              ["Communauté de biens", "Biens acquis après mariage sont communs", "Protection du conjoint, simplicité", "Risque en cas de dettes"],
              ["Séparation de biens", "Chacun conserve ses biens", "Autonomie financière", "Complexité notariale"],
              ["Régime coutumier", "Biens gérés selon la coutume", "Respect des traditions", "Inégalités potentielles"]
            ]
          }
        ]
      }
    ],
    references: [
      {
        url: "https://www.jurisitetunisie.com/cameroun/ordonnance_81_02_etat_civil.htm",
        title: "Ordonnance n° 81-02 du 29 juin 1981",
        description: "Texte régissant l’état civil au Cameroun"
      },
      {
        url: "https://www.ohchr.org/fr/instruments-mechanisms/instruments/convention-elimination-all-forms-discrimination-against-women",
        title: "Convention CEDAW",
        description: "Cadre international pour l’égalité des genres"
      },
      {
        url: "https://www.droit-afrique.com/uploads/Cameroun-Code-civil.pdf",
        title: "Code civil camerounais",
        description: "Dispositions applicables au droit de la famille"
      }
    ]
  },
  {
    id: 2,
    title: "Le Droit du Travail au Cameroun : Droits et Obligations",
    excerpt: "Un guide complet sur le droit du travail camerounais, couvrant contrats, salaires, licenciements et influences des conventions internationales de l’OIT.",
    date: "15 Août 2024",
    image: travailleur,
    author: "Maître Daouda Mbouobouo",
    readTime: "20 min",
    category: "Droit Social",
    tags: ["travail", "contrat", "licenciement", "salaire", "OIT"],
    sections: [
      {
        id: 1,
        title: "Fondements du Droit du Travail",
        content: [
          {
            text: "Le droit du travail camerounais, régi par la Loi n° 92/007 du 14 août 1992 portant Code du travail, protège les salariés tout en encadrant les relations avec les employeurs. Il s’aligne sur les conventions de l’Organisation Internationale du Travail (OIT) ratifiées par le Cameroun."
          },
          {
            type: "highlight",
            text: "Le principe de subordination, où le salarié exécute un travail sous l’autorité de l’employeur, est au cœur du contrat de travail camerounais."
          }
        ]
      },
      {
        id: 2,
        title: "Les Contrats de Travail",
        content: [
          {
            text: "Le Code du travail distingue plusieurs types de contrats, chacun avec des conditions spécifiques pour répondre aux besoins du marché camerounais."
          },
          {
            type: "subsection",
            title: "Contrat à Durée Indéterminée (CDI)",
            content: [
              {
                text: "Le CDI est la norme, offrant une stabilité au salarié. Il peut être verbal ou écrit, mais l’écrit est requis pour les contrats de plus de 3 mois (article 25 du Code du travail)."
              },
              {
                type: "list",
                items: [
                  "Identification des parties",
                  "Description du poste",
                  "Salaire et avantages",
                  "Durée du préavis"
                ]
              }
            ]
          },
          {
            type: "subsection",
            title: "Contrat à Durée Déterminée (CDD)",
            content: [
              {
                text: "Le CDD est limité à 2 ans renouvelables une fois, sauf pour les emplois saisonniers ou temporaires (article 25(2))."
              },
              {
                type: "warningBox",
                text: "Un CDD non conforme peut être requalifié en CDI par le tribunal, avec des dommages-intérêts."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Rémunération et Conditions de Travail",
        content: [
          {
            text: "La rémunération inclut le salaire de base, les primes et les avantages en nature, avec un salaire minimum garanti (SMIG) fixé par décret."
          },
          {
            type: "subsection",
            title: "Le Salaire Minimum Interprofessionnel Garanti (SMIG)",
            content: [
              {
                text: "En 2024, le SMIG est de 36 270 FCFA par mois pour 40 heures hebdomadaires, selon le Décret n° 2014/221 du 23 juillet 2014."
              },
              {
                type: "infoBox",
                text: "Les employeurs doivent respecter le SMIG, sous peine de sanctions administratives par l’Inspection du travail."
              }
            ]
          },
          {
            type: "subsection",
            title: "Durée du Travail",
            content: [
              {
                text: "La durée légale est de 40 heures par semaine (article 80), avec des heures supplémentaires majorées de 20% à 50%."
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Rupture du Contrat de Travail",
        content: [
          {
            text: "La rupture peut résulter d’un licenciement, d’une démission ou d’une rupture conventionnelle, avec des procédures strictes pour protéger les parties."
          },
          {
            type: "subsection",
            title: "Licenciement pour Motif Personnel",
            content: [
              {
                text: "Le licenciement doit être justifié par une faute grave ou une incapacité professionnelle, avec une procédure disciplinaire (article 36)."
              },
              {
                type: "procedure",
                title: "Étapes du licenciement",
                steps: [
                  "Convocation écrite avec motif",
                  "Entretien préalable avec assistance possible",
                  "Notification écrite dans les 8 jours",
                  "Paiement des indemnités dues"
                ]
              }
            ]
          },
          {
            type: "subsection",
            title: "Licenciement Économique",
            content: [
              {
                text: "Autorisé pour des raisons économiques (article 40), il nécessite l’autorisation de l’Inspection du travail et un plan social pour les entreprises de plus de 50 employés."
              }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Droit Syndical et Dialogue Social",
        content: [
          {
            text: "Les syndicats sont protégés par la Constitution et le Code du travail, permettant la négociation collective et la grève (article 157)."
          },
          {
            type: "subsection",
            title: "Représentation des Travailleurs",
            content: [
              {
                text: "Les délégués du personnel, élus dans les entreprises de plus de 25 salariés, représentent les employés auprès de l’employeur."
              }
            ]
          }
        ]
      }
    ],
    references: [
      {
        url: "https://www.droit-afrique.com/uploads/Cameroun-Code-1992-travail.pdf",
        title: "Code du travail camerounais",
        description: "Loi n° 92/007 du 14 août 1992"
      },
      {
        url: "https://www.ilo.org/global/standards/lang--en/index.htm",
        title: "Conventions de l’OIT",
        description: "Normes internationales du travail"
      },
      {
        url: "https://www.minfopra.gov.cm/",
        title: "Ministère de la Fonction Publique et du Travail",
        description: "Ressources officielles sur le travail au Cameroun"
      }
    ]
  },
  {
    id: 3,
    title: "La Médiation Juridique : Une Solution Amiable au Cameroun",
    excerpt: "Découvrez comment la médiation, ancrée dans les traditions africaines et modernisée par le droit, résout les conflits de manière rapide et économique.",
    date: "1er Août 2024",
    image: mediation,
    author: "Maître Daouda Mbouobouo",
    readTime: "15 min",
    category: "Modes Alternatifs",
    tags: ["médiation", "conflit", "arbitrage", "conciliation", "coutume"],
    sections: [
      {
        id: 1,
        title: "Principes de la Médiation",
        content: [
          {
            text: "La médiation au Cameroun combine les approches traditionnelles africaines (palabre) avec les cadres modernes, notamment sous l’influence de l’OHADA et du droit français. Elle vise à résoudre les différends par un tiers neutre."
          },
          {
            type: "highlight",
            text: "La médiation est particulièrement adaptée au contexte camerounais, où la préservation des relations sociales est une valeur culturelle forte."
          }
        ]
      },
      {
        id: 2,
        title: "Types de Médiation",
        content: [
          {
            type: "subsection",
            title: "Médiation Traditionnelle",
            content: [
              {
                text: "Pratiquée par les chefs traditionnels ou les anciens, elle est courante pour les conflits familiaux ou fonciers dans les zones rurales."
              }
            ]
          },
          {
            type: "subsection",
            title: "Médiation Judiciaire",
            content: [
              {
                text: "Introduite par la Loi n° 2007/001 du 19 avril 2007, elle est ordonnée par un juge avec l’accord des parties, souvent dans les affaires civiles ou commerciales."
              },
              {
                type: "procedure",
                title: "Mise en œuvre",
                steps: [
                  "Proposition par le juge ou demande des parties",
                  "Nomination d’un médiateur agréé",
                  "Durée maximale de 3 mois renouvelable",
                  "Rédaction d’un accord homologué par le tribunal"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Processus de Médiation",
        content: [
          {
            text: "Le processus est structuré pour garantir l’équité et la confidentialité, tout en respectant les valeurs culturelles camerounaises."
          },
          {
            type: "subsection",
            title: "Étapes Clés",
            content: [
              {
                type: "timeline",
                events: [
                  {
                    phase: "Initiation",
                    description: "Accord sur les règles et signature d’une convention."
                  },
                  {
                    phase: "Dialogue",
                    description: "Expression des positions et identification des intérêts."
                  },
                  {
                    phase: "Négociation",
                    description: "Exploration des solutions possibles."
                  },
                  {
                    phase: "Conclusion",
                    description: "Rédaction de l’accord ou constat d’échec."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Avantages et Limites",
        content: [
          {
            type: "comparison",
            title: "Médiation vs Justice Traditionnelle",
            criteria: [
              {
                aspect: "Coût",
                mediation: "Honoraires partagés, souvent faibles",
                justice: "Frais judiciaires élevés"
              },
              {
                aspect: "Délai",
                mediation: "1 à 3 mois",
                justice: "6 mois à plusieurs années"
              },
              {
                aspect: "Confidentialité",
                mediation: "Totale",
                justice: "Publique"
              },
              {
                aspect: "Relations",
                mediation: "Préservées",
                justice: "Souvent rompues"
              }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Réglementation et Formation",
        content: [
          {
            text: "Les médiateurs doivent être formés et agréés, souvent par des institutions comme le Centre de Médiation et d’Arbitrage du GICAM."
          },
          {
            type: "infoBox",
            text: "La formation inclut 120 heures de cours théoriques et pratiques, avec un accent sur la déontologie et la gestion des conflits interculturels."
          }
        ]
      }
    ],
    references: [
      {
        url: "https://www.ohada.org/fr/mediation-et-arbitrage",
        title: "OHADA - Médiation et Arbitrage",
        description: "Cadre régional pour les modes alternatifs"
      },
      {
        url: "https://www.gicam.cm/centre-mediation-arbitrage",
        title: "Centre de Médiation et d’Arbitrage du GICAM",
        description: "Institution camerounaise pour la médiation"
      },
      {
        url: "https://www.droit-afrique.com/uploads/Cameroun-Loi-2007-001-justice.pdf",
        title: "Loi n° 2007/001",
        description: "Dispositions sur la médiation judiciaire"
      }
    ]
  },
  {
    id: 4,
    title: "Protection des Données Personnelles : Cameroun et Perspectives Internationales",
    excerpt: "Un guide sur la protection des données au Cameroun, aligné sur la loi nationale et inspiré par le RGPD, pour sécuriser vos informations personnelles.",
    date: "1er Août 2024",
    image: data,
    author: "Maître Daouda Mbouobouo",
    readTime: "20 min",
    category: "Droit Numérique",
    tags: ["données personnelles", "RGPD", "ANPDC", "privacy"],
    sections: [
      {
        id: 1,
        title: "Cadre Juridique au Cameroun",
        content: [
          {
            text: "La protection des données personnelles au Cameroun est régie par la Loi n° 2010/012 du 21 décembre 2010, complétée par des décrets d’application. Elle s’inspire du RGPD européen et des principes de l’Union Africaine."
          },
          {
            type: "definition",
            term: "Donnée personnelle",
            content: "Toute information permettant d’identifier directement ou indirectement une personne physique (nom, numéro de téléphone, adresse IP, etc.)."
          }
        ]
      },
      {
        id: 2,
        title: "Principes de Base",
        content: [
          {
            text: "La loi camerounaise impose des principes stricts pour le traitement des données, alignés sur les standards internationaux."
          },
          {
            type: "principlesList",
            principles: [
              {
                name: "Légalité",
                description: "Le traitement doit avoir une base légale (consentement, contrat, obligation légale)."
              },
              {
                name: "Transparence",
                description: "Les individus doivent être informés des finalités du traitement."
              },
              {
                name: "Sécurité",
                description: "Mesures techniques pour protéger les données contre les violations."
              },
              {
                name: "Limitation",
                description: "Collecte minimale et conservation limitée dans le temps."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Bases Légales du Traitement",
        content: [
          {
            text: "Les traitements doivent reposer sur une base légale définie par la loi de 2010."
          },
          {
            type: "legalBases",
            bases: [
              {
                name: "Consentement",
                article: "Article 6",
                description: "Accord libre et éclairé de la personne",
                examples: ["Marketing, collecte de données en ligne"]
              },
              {
                name: "Contrat",
                article: "Article 6",
                description: "Nécessaire pour exécuter un contrat",
                examples: ["Services bancaires, abonnements"]
              },
              {
                name: "Obligation légale",
                article: "Article 6",
                description: "Imposé par la loi",
                examples: ["Déclarations fiscales"]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Droits des Personnes",
        content: [
          {
            text: "Les citoyens camerounais bénéficient de droits renforcés sur leurs données."
          },
          {
            type: "rightsTable",
            rights: [
              {
                right: "Droit d’accès",
                articles: "Art. 17",
                description: "Consulter ses données",
                modalites: "Demande écrite à l’ANPDC",
                delai: "30 jours"
              },
              {
                right: "Droit de rectification",
                articles: "Art. 18",
                description: "Corriger les données inexactes",
                modalites: "Demande motivée",
                delai: "30 jours"
              },
              {
                right: "Droit d’opposition",
                articles: "Art. 19",
                description: "Refuser certains traitements",
                modalites: "Motifs légitimes",
                delai: "30 jours"
              }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Rôle de l’ANPDC",
        content: [
          {
            text: "L’Agence Nationale de Protection des Données à Caractère Personnel (ANPDC) contrôle la conformité et impose des sanctions."
          },
          {
            type: "sanctionsScale",
            categories: [
              {
                level: "Infraction mineure",
                amount: "Jusqu’à 5M FCFA",
                violations: ["Défaut d’information", "Manque de transparence"],
                examples: ["Absence de politique de confidentialité"]
              },
              {
                level: "Infraction grave",
                amount: "Jusqu’à 50M FCFA",
                violations: ["Violation de sécurité", "Transfert illégal"],
                examples: ["Piratage non signalé"]
              }
            ]
          }
        ]
      }
    ],
    references: [
      {
        url: "https://www.anpdc.cm/loi-2010-012",
        title: "Loi n° 2010/012",
        description: "Protection des données personnelles au Cameroun"
      },
      {
        url: "https://www.coe.int/fr/web/data-protection",
        title: "Convention 108+ du Conseil de l’Europe",
        description: "Normes internationales adoptées par le Cameroun"
      },
      {
        url: "https://www.au.int/fr/treaties",
        title: "Union Africaine - Cybersécurité",
        description: "Cadre africain pour la protection des données"
      }
    ]
  },
  {
    id: 5,
    title: "Le Droit Maritime au Cameroun et dans le Monde",
    excerpt: "Découvrez le droit maritime camerounais sous l’égide de la CEMAC et des conventions internationales, régissant navigation, commerce et sécurité en mer.",
    date: "20 Mai 2025",
    image: ship,
    author: "Maître Daouda Mbouobouo",
    readTime: "22 min",
    category: "Droit Spécialisé",
    tags: ["maritime", "navigation", "CEMAC", "UNCLOS", "commerce"],
    sections: [
      {
        id: 1,
        title: "Introduction au Droit Maritime",
        content: [
          {
            text: "Le droit maritime camerounais, encadré par le Code de la Marine Marchande de la CEMAC (2001) et les conventions internationales, régit la navigation, le commerce maritime et la sécurité dans les ports comme Douala et Kribi."
          },
          {
            type: "imageCenter",
            image: ship2,
            imageAlt: "Port de Douala",
            text: "Le Cameroun, avec ses 400 km de côtes, joue un rôle clé dans le commerce maritime en Afrique centrale, notamment via le port de Douala, hub régional."
          },
          {
            type: "highlight",
            text: "Le droit maritime combine des règles nationales (CEMAC) et internationales (UNCLOS, SOLAS), adaptées au contexte africain."
          }
        ]
      },
      {
        id: 2,
        title: "Historique et Sources",
        content: [
          {
            text: "Le droit maritime africain s’inspire des traditions coloniales (française pour le Cameroun francophone) et des coutumes maritimes locales, enrichies par les conventions modernes."
          },
          {
            type: "imageRight",
            image: ship3,
            imageAlt: "Navire marchand",
            text: "La Convention UNCLOS (1982), ratifiée par le Cameroun, constitue la base du droit maritime moderne, définissant les zones maritimes et les droits des États."
          },
          {
            type: "subsection",
            title: "Évolution du Droit Maritime",
            content: [
              {
                type: "timeline",
                events: [
                  {
                    period: "1960",
                    event: "Indépendance du Cameroun",
                    description: "Adoption des règles maritimes coloniales françaises."
                  },
                  {
                    period: "2001",
                    event: "Code CEMAC",
                    description: "Harmonisation des règles maritimes en Afrique centrale."
                  },
                  {
                    period: "2010",
                    event: "Port autonome de Kribi",
                    description: "Modernisation des infrastructures maritimes."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Zones Maritimes et Juridiction",
        content: [
          {
            text: "Le Cameroun exerce sa souveraineté sur plusieurs zones maritimes, conformément à l’UNCLOS."
          },
          {
            type: "subsection",
            title: "Classification des Zones",
            content: [
              {
                type: "maritimeZones",
                zones: [
                  {
                    name: "Mer territoriale",
                    description: "Zone côtière sous souveraineté pleine",
                    regime: "Droit de passage inoffensif",
                    width: "12 milles marins"
                  },
                  {
                    name: "Zone économique exclusive",
                    description: "Exploitation des ressources marines",
                    regime: "Droits souverains",
                    width: "200 milles marins"
                  },
                  {
                    name: "Plateau continental",
                    description: "Ressources du sous-sol",
                    regime: "Droits d’exploration",
                    width: "Jusqu’à 350 milles marins"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Commerce Maritime et Contrats",
        content: [
          {
            text: "Le commerce maritime est vital pour l’économie camerounaise, avec des contrats régis par le Code CEMAC et les conventions internationales."
          },
          {
            type: "subsection",
            title: "Connaissement Maritime",
            content: [
              {
                text: "Le connaissement est un document clé, servant de preuve du contrat, reçu des marchandises et titre négociable."
              },
              {
                type: "warningBox",
                text: "Les erreurs dans le connaissement peuvent entraîner des litiges coûteux, notamment dans les ports de Douala."
              }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Sécurité et Environnement",
        content: [
          {
            text: "La sécurité maritime est renforcée par la Convention SOLAS et les réglementations CEMAC."
          },
          {
            type: "subsection",
            title: "Exigences de Sécurité",
            content: [
              {
                type: "safetyRequirements",
                categories: [
                  {
                    domain: "Navires",
                    requirements: ["Construction étanche", "Systèmes anti-incendie"]
                  },
                  {
                    domain: "Équipage",
                    requirements: ["Formation STCW", "Certificats médicaux"]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    references: [
      {
        url: "https://www.cemac.int/documents/code-marine-marchande",
        title: "Code de la Marine Marchande CEMAC",
        description: "Réglementation maritime régionale"
      },
      {
        url: "https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf",
        title: "UNCLOS",
        description: "Convention des Nations Unies sur le droit de la mer"
      },
      {
        url: "https://www.imo.org/fr",
        title: "Organisation Maritime Internationale",
        description: "Normes internationales pour la sécurité maritime"
      }
    ]
  },
  {
    id: 6,
    title: "Le Droit des Affaires OHADA : Un Cadre pour l’Afrique",
    excerpt: "Découvrez le droit OHADA, un système juridique unifié favorisant les affaires en Afrique, avec un focus sur le Cameroun.",
    date: "10 Septembre 2024",
    image: ohada,
    author: "Maître Daouda Mbouobouo",
    readTime: "25 min",
    category: "Droit des Affaires",
    tags: ["OHADA", "entreprise", "commerce", "insolvabilité", "arbitrage"],
    sections: [
      {
        id: 1,
        title: "Introduction à l’OHADA",
        content: [
          {
            text: "L’Organisation pour l’Harmonisation en Afrique du Droit des Affaires (OHADA), créée en 1993, unifie le droit commercial dans 17 pays africains, dont le Cameroun. Ses Actes uniformes couvrent les sociétés, les contrats, l’insolvabilité et l’arbitrage."
          },
          {
            type: "highlight",
            text: "L’OHADA vise à attirer les investissements en offrant un cadre juridique prévisible et moderne, remplaçant les lois coloniales disparates."
          }
        ]
      },
      {
        id: 2,
        title: "Formation des Sociétés",
        content: [
          {
            text: "L’Acte uniforme sur le droit des sociétés commerciales (révisé en 2014) définit les types de sociétés possibles."
          },
          {
            type: "subsection",
            title: "Types de Sociétés",
            content: [
              {
                type: "table",
                headers: ["Type", "Caractéristiques", "Avantages", "Inconvénients"],
                rows: [
                  ["SARL", "Responsabilité limitée, 1 associé min.", "Simplicité, flexibilité", "Capital minimum requis"],
                  ["SA", "Actionnaires, conseil d’administration", "Accès aux capitaux", "Gouvernance complexe"],
                  ["SNC", "Responsabilité illimitée", "Confiance des partenaires", "Risque financier élevé"]
                ]
              }
            ]
          },
          {
            type: "subsection",
            title: "Procédure de Création",
            content: [
              {
                type: "procedure",
                title: "Étapes de constitution",
                steps: [
                  "Rédaction des statuts devant notaire",
                  "Enregistrement au RCCM",
                  "Publication dans un journal d’annonces légales",
                  "Obtention d’un numéro fiscal"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Insolvabilité et Redressement",
        content: [
          {
            text: "L’Acte uniforme sur les procédures collectives (2015) régit la faillite et le redressement des entreprises."
          },
          {
            type: "subsection",
            title: "Mécanismes de Sauvetage",
            content: [
              {
                type: "definitionList",
                items: [
                  {
                    term: "Redressement judiciaire",
                    definition: "Plan pour restructurer l’entreprise viable."
                  },
                  {
                    term: "Liquidation",
                    definition: "Vente des actifs pour payer les créanciers."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Arbitrage et Résolution des Litiges",
        content: [
          {
            text: "L’Acte uniforme sur l’arbitrage (1999) favorise la résolution rapide des litiges commerciaux."
          },
          {
            type: "subsection",
            title: "Cour Commune de Justice et d’Arbitrage (CCJA)",
            content: [
              {
                text: "La CCJA, basée à Abidjan, supervise les arbitrages OHADA et sert de cour d’appel."
              },
              {
                type: "infoBox",
                text: "L’arbitrage OHADA est souvent plus rapide que les tribunaux nationaux, avec des sentences exécutoires dans tous les États membres."
              }
            ]
          }
        ]
      }
    ],
    references: [
      {
        url: "https://www.ohada.org/fr/actus-uniformes",
        title: "Actes uniformes OHADA",
        description: "Textes officiels du droit des affaires"
      },
      {
        url: "https://www.ccja.org/",
        title: "Cour Commune de Justice et d’Arbitrage",
        description: "Institution judiciaire de l’OHADA"
      },
      {
        url: "https://www.droit-afrique.com/uploads/OHADA-Acte-uniforme-societes-commerciales.pdf",
        title: "Acte uniforme sur les sociétés",
        description: "Réglementation des entreprises OHADA"
      }
    ]
  },
  {
    id: 7,
    title: "Le Droit Coutumier au Cameroun : Famille et Foncier",
    excerpt: "Explorez le droit coutumier camerounais, ses interactions avec le droit civil et ses défis dans les domaines familiaux et fonciers.",
    date: "5 Octobre 2024",
    image: customary,
    author: "Maître Daouda Mbouobouo",
    readTime: "22 min",
    category: "Droit Coutumier",
    tags: ["coutume", "famille", "foncier", "succession", "tradition"],
    sections: [
      {
        id: 1,
        title: "Introduction au Droit Coutumier",
        content: [
          {
            text: "Le droit coutumier, ancré dans les traditions des 250+ groupes ethniques du Cameroun, régit les relations familiales, foncières et successorales, surtout dans les zones rurales."
          },
          {
            type: "highlight",
            text: "Malgré la prédominance du droit civil dans les textes, le droit coutumier reste influent, représentant 80% des litiges fonciers et familiaux dans certaines régions."
          }
        ]
      },
      {
        id: 2,
        title: "Mariage et Famille Coutumiers",
        content: [
          {
            text: "Le mariage coutumier est central, avec des pratiques comme la dot et les rites variant selon les ethnies."
          },
          {
            type: "subsection",
            title: "La Dot",
            content: [
              {
                text: "La dot, souvent composée d’argent, de biens ou de services, scelle l’alliance entre familles. Elle est juridiquement reconnue si enregistrée."
              },
              {
                type: "warningBox",
                text: "Une dot excessive peut être contestée devant les tribunaux comme contraire à l’ordre public."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Succession Coutumière",
        content: [
          {
            text: "La succession suit souvent des règles patrilinéaires ou matrilinéaires, selon l’ethnie, mais entre en conflit avec le droit civil."
          },
          {
            type: "subsection",
            title: "Conflits avec le Droit Civil",
            content: [
              {
                type: "comparison",
                title: "Coutume vs Droit Civil",
                criteria: [
                  {
                    aspect: "Héritiers",
                    mediation: "Préférence masculine (patrilinéaire)",
                    justice: "Égalité des genres"
                  },
                  {
                    aspect: "Procédure",
                    mediation: "Décision par les anciens",
                    justice: "Tribunal civil"
                  },
                  {
                    aspect: "Exécution",
                    mediation: "Respect communautaire",
                    justice: "Force légale"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Droit Foncier Coutumier",
        content: [
          {
            text: "Le foncier coutumier repose sur la gestion communautaire des terres, souvent sans titres formels."
          },
          {
            type: "subsection",
            title: "Réforme Foncière",
            content: [
              {
                text: "L’Ordonnance n° 74-1 du 6 juillet 1974 exige l’immatriculation des terres, mais 90% des terres rurales restent sous régime coutumier."
              },
              {
                type: "infoBox",
                text: "La réforme foncière vise à sécuriser les droits, mais les conflits entre coutume et État persistent."
              }
            ]
          }
        ]
      }
    ],
    references: [
      {
        url: "https://www.droit-afrique.com/uploads/Cameroun-Ordonnance-1974-1-foncier.pdf",
        title: "Ordonnance n° 74-1",
        description: "Régime foncier et domanial"
      },
      {
        url: "https://www.foncier-developpement.fr/publication/cameroun-droit-coutumier",
        title: "Droit coutumier foncier",
        description: "Études sur les pratiques coutumières"
      }
    ]
  },
  {
    id: 8,
    title: "Le Droit de l’Environnement au Cameroun",
    excerpt: "Un aperçu du droit environnemental camerounais, intégrant lois nationales et engagements internationaux pour protéger la biodiversité et lutter contre le changement climatique.",
    date: "15 Octobre 2024",
    image: environment,
    author: "Maître Daouda Mbouobouo",
    readTime: "20 min",
    category: "Droit Environnemental",
    tags: ["environnement", "biodiversité", "climat", "pollution", "forêts"],
    sections: [
      {
        id: 1,
        title: "Cadre Juridique Environnemental",
        content: [
          {
            text: "Le droit environnemental camerounais est régi par la Loi n° 96/12 du 5 août 1996, complétée par des conventions internationales comme la Convention sur la biodiversité (CBD)."
          },
          {
            type: "highlight",
            text: "Le Cameroun, avec sa riche biodiversité (forêt du Bassin du Congo), est un acteur clé dans la lutte contre la déforestation et le changement climatique."
          }
        ]
      },
      {
        id: 2,
        title: "Principes du Droit Environnemental",
        content: [
          {
            text: "La législation camerounaise adopte des principes internationaux pour guider la protection de l’environnement."
          },
          {
            type: "principlesList",
            principles: [
              {
                name: "Prévention",
                description: "Anticiper les dommages environnementaux."
              },
              {
                name: "Pollueur-payeur",
                description: "Le responsable de la pollution supporte les coûts."
              },
              {
                name: "Participation",
                description: "Implication des communautés locales."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Gestion des Ressources Naturelles",
        content: [
          {
            text: "Le Cameroun réglemente l’exploitation des forêts, des minerais et de l’eau pour équilibrer développement et conservation."
          },
          {
            type: "subsection",
            title: "Droit Forestier",
            content: [
              {
                text: "La Loi n° 94/01 du 20 janvier 1994 régit l’exploitation forestière, imposant des permis et des plans de gestion durable."
              },
              {
                type: "infoBox",
                text: "Le Cameroun a réduit la déforestation de 18% entre 2010 et 2020 grâce aux réformes forestières."
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Sanctions Environnementales",
        content: [
          {
            text: "Les violations environnementales sont punies par des amendes et des peines d’emprisonnement."
          },
          {
            type: "sanctionsScale",
            categories: [
              {
                level: "Infraction mineure",
                amount: "1M à 5M FCFA",
                violations: ["Déversement non autorisé"],
                examples: ["Petits rejets industriels"]
              },
              {
                level: "Infraction grave",
                amount: "10M à 100M FCFA",
                violations: ["Déforestation illégale"],
                examples: ["Exploitation sans permis"]
              }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Engagements Internationaux",
        content: [
          {
            text: "Le Cameroun est partie à plusieurs accords mondiaux pour protéger l’environnement."
          },
          {
            type: "conventionsList",
            conventions: [
              {
                name: "Accord de Paris",
                year: "2015",
                scope: "Réduction des émissions",
                status: "Ratifié"
              },
              {
                name: "Convention CBD",
                year: "1992",
                scope: "Conservation de la biodiversité",
                status: "Ratifié"
              }
            ]
          }
        ]
      }
    ],
    references: [
      {
        url: "https://www.prc.cm/fr/legislation/loi-96-12-environnement",
        title: "Loi n° 96/12",
        description: "Cadre de la gestion environnementale"
      },
      {
        url: "https://www.cbd.int/",
        title: "Convention sur la Biodiversité",
        description: "Engagements internationaux du Cameroun"
      },
      {
        url: "https://www.fao.org/faolex/results/details/fr/c/LEX-FAOC017717",
        title: "Loi n° 94/01 sur les forêts",
        description: "Réglementation forestière camerounaise"
      }
    ]
  }
];

export const recentBlogs = [blogData[5], blogData[6], blogData[7]]; // Updated to include newer posts
export const relatedBlogs = [blogData[0], blogData[1], blogData[4]];

export const initialComments = [
  {
    id: 1,
    author: "Jean Dupont",
    date: "29 Août 2024",
    content: "Excellent article sur le droit de la famille ! Les explications sur les mariages coutumiers sont très pertinentes pour le contexte camerounais.",
    blogId: 1
  },
  {
    id: 2,
    author: "Marie Curie",
    date: "28 Août 2024",
    content: "Merci pour cet aperçu du droit du travail. Les détails sur le SMIG et les licenciements m’ont beaucoup aidé.",
    blogId: 2
  },
  {
    id: 3,
    author: "Pierre Martin",
    date: "15 Août 2024",
    content: "La médiation semble idéale pour éviter les longs procès. Peut-on trouver des médiateurs traditionnels via le GICAM ?",
    blogId: 3
  },
  {
    id: 4,
    author: "Sophie Dubois",
    date: "10 Août 2024",
    content: "Très utile pour comprendre la protection des données au Cameroun. L’ANPDC semble jouer un rôle clé !",
    blogId: 4
  },
  {
    id: 5,
    author: "Paul Ngono",
    date: "25 Mai 2025",
    content: "Le droit maritime est fascinant, surtout avec le rôle du port de Douala. Plus d’infos sur les litiges commerciaux ?",
    blogId: 5
  },
  {
    id: 6,
    author: "Aminatou Bello",
    date: "15 Septembre 2024",
    content: "L’OHADA simplifie vraiment les affaires au Cameroun. Merci pour les détails sur l’arbitrage !",
    blogId: 6
  },
  {
    id: 7,
    author: "Clémentine Eto",
    date: "10 Octobre 2024",
    content: "Le droit coutumier est complexe mais essentiel. Pouvez-vous parler des conflits fonciers dans le Nord-Ouest ?",
    blogId: 7
  }
];

export const categories = [
  { id: 1, name: "Droit Civil", slug: "droit-civil", description: "Famille, contrats, responsabilité" },
  { id: 2, name: "Droit Social", slug: "droit-social", description: "Travail, sécurité sociale" },
  { id: 3, name: "Modes Alternatifs", slug: "modes-alternatifs", description: "Médiation, arbitrage, conciliation" },
  { id: 4, name: "Droit Numérique", slug: "droit-numerique", description: "Données personnelles, cybersécurité" },
  { id: 5, name: "Droit Spécialisé", slug: "droit-specialise", description: "Maritime, aérien, spatial" },
  { id: 6, name: "Droit des Affaires", slug: "droit-affaires", description: "OHADA, commerce, insolvabilité" },
  { id: 7, name: "Droit Coutumier", slug: "droit-coutumier", description: "Famille, foncier, succession" },
  { id: 8, name: "Droit Environnemental", slug: "droit-environnemental", description: "Biodiversité, climat, pollution" }
];

export const allTags = [
  "famille", "mariage", "divorce", "filiation", "coutume", "travail", "contrat",
  "licenciement", "salaire", "OIT", "médiation", "conflit", "arbitrage",
  "conciliation", "données personnelles", "RGPD", "ANPDC", "privacy", "maritime",
  "navigation", "CEMAC", "UNCLOS", "commerce", "OHADA", "entreprise", "insolvabilité",
  "succession", "foncier", "tradition", "environnement", "biodiversité", "climat",
  "pollution", "forêts"
];

export default blogData;