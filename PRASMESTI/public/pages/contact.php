<style>
    /* Style spécifique conservé depuis ton fichier original */
    .th-btn.style3 {
        background: #f44336;
        color: var(--white-color);
        box-shadow: inset 0 0 0 0 var(--theme-color);
    }
</style>

<div class="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="theme">
    <div class="container">
        <div class="breadcumb-content">
            <h1 class="breadcumb-title">Contactez-nous</h1>
            <ul class="breadcumb-menu">
                <li><a href="index.php?p=accueil">Accueil</a></li>
                <li>Contactez-nous</li>
            </ul>
        </div>
    </div>
</div>

<div class="space overflow-hidden contact-area-1 position-relative z-index-common">
    <div class="container">
        <div class="contact-wrap1">
            <div class="row gx-60 gy-40">
                <div class="col-xl-4 col-lg-5">
                    <div class="contact-feature">
                        <div class="box-icon">
                            <i class="fas fa-map-location-dot"></i>
                        </div>
                        <div class="media-body">
                            <h3 class="box-title">Adresse</h3>
                            <p class="box-text">
                                Bd Triomphal, Libreville, Gabon
                            </p>
                        </div>
                    </div>
                    <div class="contact-feature">
                        <div class="box-icon" data-theme-color="#FFAC00">
                            <i class="fas fa-phone-volume"></i>
                        </div>
                        <div class="media-body">
                            <h3 class="box-title">Téléphone</h3>
                            <p class="box-text"><a href="tel:+24177056649">+241 77 05 66 49</a></p>
                        </div>
                    </div>
                    <div class="contact-feature">
                        <div class="box-icon" data-theme-color="#122F2A">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="media-body">
                            <h3 class="box-title">Email</h3>
                            <p class="box-text"><a href="mailto:prasmesti@ceeac-eccas.org">prasmesti@ceeac-eccas.org</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                    <div class="contact-map">
                        <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757628359414!2d9.4452!3d0.3924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjMnMzIuNiJOIDnCsDI2JzQyLjciRQ!5e0!3m2!1sfr!2sga!4v1600000000000!5m2!1sfr!2sga"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-page-form-wrap space-top">
            <div class="row gy-40">
                <div class="col-xl-6 align-self-end">
                    <div class="contact-thumb1-1">
                        <img src="assets/img/normal/contact_1_1.png" alt="img">
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="contact-form-v1 contact-page-form">
                        <form action="core/send_mail.php" method="POST" class="contact-form style-border ajax-contact">
                            <h3 class="box-title mb-30">Envoyez-nous un message</h3>
                            <div class="row">
                                <div class="form-group style-border col-12">
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Nom complet">
                                </div>
                                <div class="form-group style-border col-12">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Adresse email">
                                </div>
                                <div class="form-group style-border col-12">
                                    <input type="text" class="form-control" name="number" id="number" placeholder="Numéro de téléphone">
                                </div>
                                <div class="form-group style-border col-12">
                                    <textarea name="message" id="message" cols="30" rows="3" class="form-control" placeholder="Votre message"></textarea>
                                </div>
                                <div class="form-btn col-12">
                                    <button class="th-btn">Envoyer le message <i class="fas fa-paper-plane ms-2"></i></button>
                                </div>
                            </div>
                            <p class="form-messages mb-0 mt-3"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>