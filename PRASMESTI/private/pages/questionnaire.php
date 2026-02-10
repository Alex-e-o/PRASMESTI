<!doctype html>
<html lang="fr">

<?php include 'includes/head.php'; ?>

<body>

<div id="layout-wrapper">
    <?php include 'includes/topbar.php'; ?>
    <?php include 'includes/sidebar.php'; ?>

    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header text-center bg-white border-bottom">
                                <span class="logo-lg">
                                    <img src="assets/images/Logo.png" alt="Logo" height="40">
                                    <span class="page-title-black ms-2" style="font-size: 24px; font-weight: bold; vertical-align: middle;">PRASMESTI</span>
                                </span>
                                <p class="text-muted mt-2">Portail Régional d'Aide au Suivi en Matière d'Éducation, Sciences, Technologies et Innovation</p>
                            </div>

                            <div class="card-body">
                                <form action="actions/save_questionnaire.php" method="POST" id="prasmesti-wizard-form">

                                    <ul class="wizard-nav mb-5">
                                        <li class="wizard-list-item">
                                            <div class="list-item">
                                                <div class="step-icon" data-bs-toggle="tooltip" title="Informations Générales">
                                                    <i class="bx bx-folder-open"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="wizard-list-item">
                                            <div class="list-item">
                                                <div class="step-icon" data-bs-toggle="tooltip" title="Dispositions Nationales">
                                                    <i class="fa fa-graduation-cap"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="wizard-list-item">
                                            <div class="list-item">
                                                <div class="step-icon" data-bs-toggle="tooltip" title="Objectifs CESA 16-25">
                                                    <i class="bx bx-globe"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="wizard-list-item">
                                            <div class="list-item">
                                                <div class="step-icon" data-bs-toggle="tooltip" title="Cibles ODD">
                                                    <i class="fa fa-universal-access"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="wizard-tab">
                                        <div class="text-center mb-5">
                                            <h5>I. Informations Générales sur les Établissements</h5>
                                        </div>
                                        <div class="alert alert-info">
                                            <strong>Note :</strong> SP (Secteur Primaire), SS (Secteur Secondaire), ST (Secteur Tertiaire).
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <h6 class="mb-3">1. Établissements publics d’enseignement général</h6>
                                                <div class="mb-3">
                                                    <label class="form-label">Niveau de formation</label>
                                                    <select class="form-select" name="niveau_formation">
                                                        <option value="prePrimaire">Pré-primaire</option>
                                                        <option value="primaire">Primaire</option>
                                                        <option value="secondaire1">Secondaire - 1er cycle</option>
                                                        <option value="secondaire2">Secondaire - 2e cycle</option>
                                                        <option value="etfp">ETFP</option>
                                                        <option value="enseignementSuperieur">Enseignement Supérieur</option>
                                                    </select>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-4 mb-3">
                                                        <label class="form-label">Zone urbaine</label>
                                                        <input type="number" class="form-control" name="nb_urbain" placeholder="0">
                                                    </div>
                                                    <div class="col-md-4 mb-3">
                                                        <label class="form-label">Zone semi-urbaine</label>
                                                        <input type="number" class="form-control" name="nb_semi_urbain" placeholder="0">
                                                    </div>
                                                    <div class="col-md-4 mb-3">
                                                        <label class="form-label">Zone rurale</label>
                                                        <input type="number" class="form-control" name="nb_rural" placeholder="0">
                                                    </div>
                                                </div>

                                                <h6 class="mt-4 mb-3">2. Enseignement Technique et Formation Professionnelle (ETFP)</h6>
                                                <div class="table-responsive">
                                                    <table class="table table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th>Zones</th>
                                                            <th>SP</th>
                                                            <th>SS</th>
                                                            <th>ST</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>Urbaine</td>
                                                            <td><input type="number" class="form-control" name="etfp_u_sp"></td>
                                                            <td><input type="number" class="form-control" name="etfp_u_ss"></td>
                                                            <td><input type="number" class="form-control" name="etfp_u_st"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rurale</td>
                                                            <td><input type="number" class="form-control" name="etfp_r_sp"></td>
                                                            <td><input type="number" class="form-control" name="etfp_r_ss"></td>
                                                            <td><input type="number" class="form-control" name="etfp_r_st"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="wizard-tab">
                                        <div class="text-center mb-5">
                                            <h5>II. Mise en Œuvre des Dispositions Nationales</h5>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Votre pays a-t-il un document cadre en éducation ?</label>
                                            <select class="form-select" name="has_document" onchange="toggleFields(this.value)">
                                                <option value="">Sélectionner...</option>
                                                <option value="oui">Oui</option>
                                                <option value="non">Non</option>
                                            </select>
                                        </div>

                                        <div id="yesFields" style="display:none;" class="p-3 bg-light rounded">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">Mise en place :</label>
                                                    <select class="form-select" name="doc_date">
                                                        <option value="Avant 2015">Avant 2015</option>
                                                        <option value="Après 2015">Après 2015</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">Mesures prises pour :</label>
                                                    <select class="form-control" id="choices-multiple-remove-button" name="mesures_prises[]" multiple>
                                                        <option value="EDPE">Petite enfance</option>
                                                        <option value="Primaire">Primaire & Secondaire</option>
                                                        <option value="Alphabétisation">Alphabétisation</option>
                                                        <option value="Innovation">Innovation</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="noFields" style="display:none;" class="p-3 bg-light rounded">
                                            <label class="form-label text-danger">Nature des obstacles :</label>
                                            <select class="form-select" name="obstacles">
                                                <option value="Politiques">Politiques</option>
                                                <option value="Financières">Financières</option>
                                                <option value="Administratives">Administratives</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="wizard-tab">
                                        <div class="text-center mb-5">
                                            <h5>III. Objectifs Stratégiques CESA 16-25</h5>
                                        </div>
                                        <div class="mb-4">
                                            <label class="form-label">Le système prend-il en compte les piliers de la CESA ?</label>
                                            <select class="form-control" id="choices-multiple-CESA" name="piliers_cesa[]" multiple>
                                                <option value="OS1">OS1- Revitaliser la profession enseignante</option>
                                                <option value="OS2">OS2- Infrastructures scolaires de qualité</option>
                                                <option value="OS3">OS3- Exploiter les TIC</option>
                                                <option value="OS7">OS7- Sciences et Mathématiques</option>
                                                <option value="OS9">OS9- Enseignement supérieur & Recherche</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Difficultés rencontrées (Synthèse) :</label>
                                            <textarea class="form-control" name="difficultes_cesa" rows="3"></textarea>
                                        </div>
                                    </div>

                                    <div class="wizard-tab">
                                        <div class="text-center mb-5">
                                            <h5>IV. Cibles Spécifiques des ODD</h5>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Cibles en éducation intégrées (Agenda 2030) :</label>
                                            <select class="form-control" id="choices-multiple-ODD" name="cibles_odd[]" multiple>
                                                <option value="FillesGarcons">Parité Filles/Garçons</option>
                                                <option value="Gratuité">Enseignement gratuit et de qualité</option>
                                                <option value="Vulnerable">Accès aux personnes vulnérables</option>
                                                <option value="Bourses">Augmentation des bourses d'études</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ces documents sont-ils devenus des instruments normatifs (lois, décrets) ?</label>
                                            <textarea class="form-control" name="instruments_normatifs" rows="3"></textarea>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <button type="button" class="btn btn-light w-sm" id="prevBtn" onclick="nextPrev(-1)">Précédent</button>
                                        <button type="button" class="btn btn-primary w-sm ms-auto" id="nextBtn" onclick="nextPrev(1)">Suivant</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <script src="assets/libs/choices.js/public/assets/scripts/choices.min.js"></script>
    <script src="assets/js/pages/form-wizard.init.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Initialisation des menus de sélection multiple
            const multiSelectIds = [
                '#choices-multiple-remove-button',
                '#choices-multiple-CESA',
                '#choices-multiple-ODD'
            ];

            multiSelectIds.forEach(id => {
                if(document.querySelector(id)) {
                    new Choices(id, {
                        removeItemButton: true,
                        placeholderValue: 'Sélectionner les options...',
                        searchEnabled: true
                    });
                }
            });
        });

        // Logique d'affichage conditionnel
        function toggleFields(value) {
            const yesDiv = document.getElementById('yesFields');
            const noDiv = document.getElementById('noFields');

            if (value === 'oui') {
                yesDiv.style.display = 'block';
                noDiv.style.display = 'none';
            } else if (value === 'non') {
                yesDiv.style.display = 'none';
                noDiv.style.display = 'block';
            } else {
                yesDiv.style.display = 'none';
                noDiv.style.display = 'none';
            }
        }
    </script>

</body>
</html>
