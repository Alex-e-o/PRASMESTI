<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>PRASMESTI</title>
		<link rel="stylesheet" type="text/css" href="presentation.css">
		<!--Page sur laquelle on arrive quand on accède au site.
			Contient le résumé du projet et un lien vers le document PDF complet-->
	</head>

	<body>
		<!--Corps commun à toutes les pages-->
		<p><!--Include du titre h1-->
			<h1>
				<?php include '../PRASMESTI/titre_h1.php'; ?>
			</h1>
		</p><!--Fin Include du titre h1-->
		<p>
			<?php include '../PRASMESTI/barreNavigation.php'?>
		</p>
		<!--Fin du corps commun à toutes les pages-->

		<p><!--Début du corps unique à la page-->
			<br />
			<div class="corpsPresentation"><!--Première ligne de grid avec les propos laminaires et le sommaire-->
				<div class="corps1 element1">
					<h4>Propos liminaires :</h4>
					L’un des leviers de la réussite d’une intégration régionale et, partant de la raison d’être des Communautés Économiques Régionales, est d’assurer une bonne communication entre les différents États membres et les Institutions qui œuvrent au sein de son espace économique régional. Sur le plan sectoriel, une bonne communication conduit inévitablement vers cette société des savoirs à laquelle, chaque enfant, chaque femme, chaque homme devra désormais tendre. Pour cela, il nous faut développer nos échanges, établir des ponts, créer un lien par le biais d’informations disponibles et fiables pour contribuer à la construction de la cohésion communautaire. Et ce lien, nous le voulons numérique ! 
				</div>
				<div class="corps1 element2">
					<!--<a href="../PRASMESTI/Documents/projet_PRASMESTI.pdf">
						<input type="button" name="ProjetPRASMETI" class="BoutonDocument" value="Consulter le document de projet">
					</a>-->
					<nav>
						<ul class="listeElement2">
							
							<li><a href="#">CHARMESTI</a></li>
							<li><a href="#">PRESTI</a></li>
							<li><a href="#">SERESTI</a></li>
							<li><a href="#">ORESTI</a></li>
							<li><a href="#">FACESTI</a></li>
							<li><a href="#">PETU</a></li>
							<li><a href="https://app.powerbi.com/view?r=eyJrIjoiMzAwMDkxNmUtZTUzYS00MGVjLTlmNTQtOTgyZDVhNzlkY2QwIiwidCI6IjdkMTQ4MDgxLWEwNjQtNGJjOS1hMjI0LWRkNTMzMDAyNGJiYyIsImMiOjl9&pageName=ReportSectiona6319d70e6cab9d34d4e" class="lienSommaire">DASHBORD CEEAC</a></li>

							<!--Début de la section Qu'est ce que le PRASMESTI-->
							<!--<li><a href="../PRASMESTI/quEst-CeQueLePRASMESTI.php" class="lienSommaire">Description</a></li>
							<li><a href="../PRASMESTI/quEst-CeQueLePRASMESTI.php" class="lienSommaire">Le PRASMESTI : Pourquoi ?</a></li>
							<li><a href="../PRASMESTI/quEst-CeQueLePRASMESTI.php" class="lienSommaire">Le PRASMESTI : Quelles sont les principales fonctions ?</a></li>-->
							<!--Fin de la section Qu'est ce que le PRASMESTI-->

							<!--Début de la section Les attentes-->
							<!---<li><a href="../PRASMESTI_attentes.php" class="lienSommaire">Le PRASMESTI : Quelles sont les attentes ?</a></li>
							<li><a href="../PRASMESTI_attentes.php" class="lienSommaire">Le PRASMESTI : Améliorer l’image de marque de l’Éducation, Formation, Sciences, Technologie et Innovation en Afrique centrale</a></li>
							<li><a href="../PRASMESTI_attentes.php" class="lienSommaire">Le PRASMESTI : quelles sont possibilités d’accès ?</a></li>-->
							<!--Fin de la section Les attentes-->

							<!--<li><a href="../PRASMESTI_objectifs.php" class="lienSommaire">En résumé, les objectifs</a></li>-->
						</ul>
					</nav>
				</div>

				<!--<div class="corps2 element3">
					
				</div>-->
				<!--<div class="corps2 element4" id="element4">
					<h4>Qu'est-ce que le PRASMESTI ?</h4>
					Construit autour d’objectifs normatifs communs, le PRASMESTI est un outil mis en place pour parvenir à une intégration régionale réussie. Il repose d’abord naturellement sur le développement d’échanges intracommunautaires et veille à ce que la diversité de tous et de chacun en matière d’éducation, formation, sciences, technologie et innovation s’exprime en florilège dans un dialogue formalisé et dans un langage clair.
					Il ne s’agit jamais d’uniformiser les structures, les pratiques et les projets. Il s’agit d’harmoniser la diversité des pratiques, d’exploiter au niveau régional les résultats des programmes nationaux pour établir des conditions de dialogues clairs et cohérents ! En termes de pratiques, le PRASMESTI a pour mission de :
					<ul class="listeElement4">
						<li>partager les informations sur la vie du monde de l’éducation, de la formation, des sciences, de la technologie et de l’innovation au sein de notre espace économique régional pour répondre aux défis qui s’imposent à nous et identifier de nouveaux horizons, etc. ;</li>
						<li>rendre disponibles les normes et standards de qualité de l’éducation, de la formation, des sciences, de la technologie et de l’innovation au sein de notre Communauté Économique Régionale ;</li>
						<li>donner du sens aux innovations en le rendant accessibles et orienter de manière stratégique les efforts et les missions de tous et de chacun en matière d’éducation, de formation, de sciences, de technologie et d’innovation ;</li>
						<li>valoriser la culture d’éducation-formation, sciences, technologie et innovation en Afrique centrale par le renforcement, selon les orientations de l’Agendas 2063, de notre sentiment d’appartenance à une seule et même entité riche de sa pluralité culturelle et éducative ;</li>
						<li>valoriser et développer les potentiels et talents de nos systèmes éducatifs ;</li>
						<li>permettre à chaque État membre de partager ses réussites ou tout simplement ses challenges en matière d’éducation et de formation : formation initiale, formation continue, formation tout au long de la vie, innovation, sciences, technologie, innovation, etc.</li>
					</ul>
					Mettre en place un outil régional d’aide au suivi de notre niveau de suivi de la mise en oeuvre des textes normatifs en éducation est une démarche dont la réussite dépend de la façon dont il sera inséré dans la vie de la Communauté ainsi que des informations partagées : contenu, les interactions et, pourquoi pas, une ligne éditoriale, etc.
				</div>-->

				<!--<div class="corps3 element5" id="element5">
					<h4>Description :</h4>
					Ainsi le PRASMESTI, qui se destine à être le trait d’union intra-communautaire en Afrique Centrale, répond à un double objectif : (1) accélérer l’intégration régionale par l’éducation, la formation, les sciences, la technologie et l’innovation en optimisant l’accès à l’information et aux données fiables ; et (2) s’adapter aux habitudes de lecture et aux usages de communication modernes par une assistance numérique apportée à chaque État membre de la Communauté et la Commission de la CEEAC à faire le point des avancées régionales en matière d’intégration académique, de sciences, de technologie et d’innovation.
				</div>-->
				<!--<div class="corps3 element6">
					
				</div>-->

				<!--<div class="corps4 element7">
									
				</div>-->
				<!--<div class="corps4 element8" id="element8">
					<h4>Le PRASMESTI : Pourquoi ?</h4>
					Soutenir et améliorer la productivité des administrateurs sectorielles nationales, fidéliser le capital humain et développer l’attractivité de l’Afrique centrale en matière d’éducation, formation, sciences, technologie et innovation en :
					<ul class="listeElement8">
						<li>capitalisant les informations et les savoir-faire en éducation, formation, sciences, technologie et innovation dans l’espace CEEAC ;</li>
						<li>simplifiant la recherche d’informations sectorielles dans la région Afrique centrale ;</li>
						<li>centralisant l’ensemble des données en éducation, sciences, technologie et innovation en un seul accès ;</li>
						<li>se fédérant autour de la mise en oeuvre des textes normatifs et l’exécution des programmes régionaux.</li>
					</ul>
				</div>-->

				<!--<div class="corps5 element9" id="element9">
					<h4>Le PRASMESTI : quelles sont les principales fonctions ?</h4>
					<ul class="listeElement9">
						<li>Communication : Fil de discussion, Actualités, Flux RSS, Gestion de profils...</li>
						<li>Coordination : Traçabilité des échanges de fichiers, Planning, Tableaux de bord graphiques et indicateurs de pilotage...</li>
						<li>Mise à disposition de contenus et documents sectoriels : textes normatifs, articles, photos, vidéos, plans, schémas, études, nomenclatures, pages de synthèse, agrégation de données...</li>
						<li>Gestion des connaissances : forums utilisateurs, foire aux questions, base de connaissances...</li>
					</ul>
				</div>-->
				<!--<div class="corps5 element10">
					
				</div>-->

				<!--<div class="corps6 element11">
					
				</div>-->
				<!--<div class="corps6 element12" id="element12">
					<h4>Le PRASMESTI : quelles sont les attentes ?</h4>
					<ul class="listeElement12L1"><!--listeElement12L1 = première des listes dans l'élément 12-->
						<!--<li>Dynamiser la collaboration entre États membres de la CEEAC, les partenaires au développement, les opérateurs économiques et tous les autres interlocuteurs internes et externes.</li>
						<li>Permettre la transmission des connaissances et d’informations pour une organisation plus productive et performante.</li>
						<li>Accompagner de nouveaux chantiers régionaux du secteur de l’Éducation, Formation, Sciences, Technologie et Innovation :
							<ul class="listeElement12L2"> <!--listeElement12L2 = deuxième des listes dans l'éléments 12-->
								<!--<li>Faciliter le partage d’informations au niveau régional et créer plus de synergies entre les différentes entités et métiers de l’Éducation, Formation, Sciences, Technologie et Innovation.</li>
								<li>Améliorer le suivi de la mise en oeuvre des partenaires au développement, les consultants techniques : suivre en temps réel les développements au sein de chaque États membres afin de disposer d’indicateurs et de statistiques pour détecter les problèmes récurrents et d’accélérer la prise en charge directement depuis le terrain</li>
								<li>Lancer un e-service régional pour l’Éducation, la Formation, les Sciences, la Technologie et l’Innovation : partage d’expérience, renforcement de capacités...</li>
							</ul>
						</li>
						<li>Renforcer les capacités de l’offre régionale d’Éducation, Formation, Sciences, Technologie et Innovation, augmenter l’attractivité régionale avec de nouveaux services sectoriels.</li>
						<li>Harmoniser et optimiser certaines tâches back-office : accès aux données et à l’historique (archivage), avancement de programmes et projets, etc.</li>
					</ul>
				</div>-->

				<!--<div class="corps7 element13" id="element13">
					<h4>Le PRASMESTI : améliorer l’image de marque de l’Éducation, Formation, Sciences, Technologie et Innovation en Afrique centrale</h4>
					Le PRASMESTI est un portail collaboratif de l’Éducation, Formation, Sciences, Technologie et Innovation de la Communauté, en abrégé PRASMESTI, renvoie à la couleur verte qui fait allusion à la relation que ce portail doit s’efforcer entre l’Éducation, Sciences, Technologie et Innovation et le respect de l’environnement : les ODD.	 <br /><br />

					Son design, sa page d’accueil, ses arborescences, ses fonctionnalités... doivent respecter une charte graphique de la CEEAC et en cohérence avec l’image de marque renvoyer par l’Agenda 2063 et l’Agenda 2030. <br /><br />

					Les usagers, entrant de plus en plus dans l’univers du PRASMESTI, assimileront plus facilement la plateforme collaborative régionale et les objectifs assignés par les deux grands Agendas qui encadrent et orientent le développement du capital humain régional.
				</div>-->
				<!--<div class="corps7 element14">
					
				</div>-->

				<!--<div class="corps8 element15">
					
				</div>-->

				<!--<div class="corps8 element16" id="element16">
					<h4>Le PRASMESTI : quelles sont possibilités d’accès ?</h4>
					La Commission choisit, selon chaque profil utilisateur de mettre à disposition telles ou telles informations et/ou applications de son système. Ci-dessous les principaux types d’accès :
					<ul class="listeElement16L1">
						<li>Intranet : accessible par les collaborateurs uniquement depuis le siège de la Commission de la Communauté Économique des États de l'Afrique Centrale et quelques points focaux des États membres.</li>
						<li>Extranet : accessible par tous les établissements d’éducation, de formation, de sciences, de technologie et d’innovation dûment enregistrés au sein des différents États membres.</li>
						<li>Internet : qui est un accès à certaines données sans avoir besoin de s’identifier.</li>
					</ul>
					L’enjeu pour la Communauté est d’adresser une communication ciblée en proposant un contenu pertinent à l’utilisateur. Par exemple, mettre en avant toute sa palette et offres complémentaires permet d’informer les acteurs de l’éducation, des sciences, du développement technologique et de l’innovation et de déclencher de nouveaux services sectoriels :
					<ul class="listeElement16L2">
						<li>Pour un États membres, il s’agit de présenter éditeur de logiciel</li>
						<li>Pour un éditeur de logiciel, il s’agirait de mettre en avant ses offres d’audit, de formation ainsi que les nouveaux modules produits...</li>
						<li>Pour un bureau d’études, il s’agit de mettre en avant tous leurs panels de prestations : de l’étude à la formation en passant par la maitrise d’oeuvre.</li>
					</ul>
				</div>-->

				<!--<div class="corps9 element17" id="element17">
					<h4>En résumé, les objectifs :</h4>
					<ul class="listeElement17">
						<li>informer sur l’interne - nouvelles, secteur d’activité de notre CER et du moment, suivi des initiatives régionales, anecdotes en rapport avec le secteur d’intégration, sponsoring, mécénat, et autres activités...</li>
						<li>informer sur l’externe – les activités et les offres des autres zones géographiques, nouvelles, articles de lois ayant un intérêt pour l’intégration par l’éducation et la formation ;</li>
						<li>Former - renseigner sur les chiffres, sur l’activité, sur l’environnement, sur les attentes de formation, sur les techniques...</li>
					</ul>
				</div>
				<!--<div class="corps9 element18">
					
				</div>-->
			</div><!--Fin première ligne de grid avec les propos laminaires et le sommaire-->
				
		</p><!--Fin du corps unique à la page-->
	</body>
</html>