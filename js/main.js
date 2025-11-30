/* VIGICAR main JS */
(function(){
  'use strict';

  const LANG_ORDER = ['fr','en','ar'];
  const FALLBACK_CARS = [
    {id:'duster-grey-man-diesel', name_fr:'Dacia Duster - Grey - Manuel - Diesel', name_en:'Dacia Duster - Grey - Manual - Diesel', name_ar:'\u062f\u0627\u0633\u064a\u0627 \u062f\u0627\u0633\u062a\u0631', segment:'SUV', gearbox:'Manuelle', fuel:'Diesel', seats:5, bags:4, price_per_day:450, image:'./img/duster-grey-man-diesel.jpg', features:['4x2','AC','Bluetooth']},
    {id:'stepway-silver-auto-essence', name_fr:'Dacia Stepway - Silver - Automatique - Essence', name_en:'Dacia Stepway - Silver - Automatic - Petrol', name_ar:'\u062f\u0627\u0633\u064a\u0627 \u0633\u0627\u0646\u062f\u064a\u0631\u0648 \u0633\u062a\u064a\u0628\u0648\u0627\u064a', segment:'Compacte', gearbox:'Automatique', fuel:'Essence', seats:5, bags:3, price_per_day:360, image:'./img/stepway-silver-auto-essence.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'stepway-black-man-diesel', name_fr:'Dacia Stepway - Black - Boite manuelle - Diesel', name_en:'Dacia Stepway - Black - Manual - Diesel', name_ar:'\u062f\u0627\u0633\u064a\u0627 \u0633\u0627\u0646\u062f\u064a\u0631\u0648 \u0633\u062a\u064a\u0628\u0648\u0627\u064a', segment:'Compacte', gearbox:'Manuelle', fuel:'Diesel', seats:5, bags:3, price_per_day:320, image:'./img/stepway-black-man-diesel.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'stepway-bronze-man-diesel', name_fr:'Dacia Stepway - Bronze - Boite manuelle - Diesel', name_en:'Dacia Stepway - Bronze - Manual - Diesel', name_ar:'\u062f\u0627\u0633\u064a\u0627 \u0633\u0627\u0646\u062f\u064a\u0631\u0648 \u0633\u062a\u064a\u0628\u0648\u0627\u064a', segment:'Compacte', gearbox:'Manuelle', fuel:'Diesel', seats:5, bags:3, price_per_day:320, image:'./img/stepway-bronze-man-diesel.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'stepway-green-man-diesel', name_fr:'Dacia Stepway - Green - Boite manuelle - Diesel', name_en:'Dacia Stepway - Green - Manual - Diesel', name_ar:'\u062f\u0627\u0633\u064a\u0627 \u0633\u0627\u0646\u062f\u064a\u0631\u0648 \u0633\u062a\u064a\u0628\u0648\u0627\u064a', segment:'Compacte', gearbox:'Manuelle', fuel:'Diesel', seats:5, bags:3, price_per_day:320, image:'./img/stepway-green-man-diesel.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'logan-green-auto-essence', name_fr:'Dacia Logan - Green - Automatique - Essence', name_en:'Dacia Logan - Green - Automatic - Petrol', name_ar:'\u062f\u0627\u0633\u064a\u0627 \u0644\u0648\u062c\u0627\u0646', segment:'Economique', gearbox:'Automatique', fuel:'Essence', seats:5, bags:3, price_per_day:320, image:'./img/logan-green-auto-essence.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'logan-grey-man-diesel', name_fr:'Dacia Logan - Grey - Boite manuelle - Diesel', name_en:'Dacia Logan - Grey - Manual - Diesel', name_ar:'\u062f\u0627\u0633\u064a\u0627 \u0644\u0648\u062c\u0627\u0646', segment:'Economique', gearbox:'Manuelle', fuel:'Diesel', seats:5, bags:3, price_per_day:250, image:'./img/logan-grey-man-diesel.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'clio5-blue-man-diesel', name_fr:'Renault Clio 5 - Blue - Boite manuelle - Diesel', name_en:'Renault Clio 5 - Blue - Manual - Diesel', name_ar:'\u0631\u064a\u0646\u0648 \u0643\u0644\u064a\u0648 5', segment:'Economique', gearbox:'Manuelle', fuel:'Diesel', seats:5, bags:2, price_per_day:290, image:'./img/clio5-blue-man-diesel.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'clio5-black-man-diesel', name_fr:'Renault Clio 5 - Black - Boite manuelle - Diesel', name_en:'Renault Clio 5 - Black - Manual - Diesel', name_ar:'\u0631\u064a\u0646\u0648 \u0643\u0644\u064a\u0648 5', segment:'Economique', gearbox:'Manuelle', fuel:'Diesel', seats:5, bags:2, price_per_day:290, image:'./img/clio5-black-man-diesel.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'c3-darkgrey-auto-essence', name_fr:'Citroen C3 - Dark Grey - Automatique - Essence', name_en:'Citroen C3 - Dark Grey - Automatic - Petrol', name_ar:'\u0633\u064a\u062a\u0631\u0648\u0646 C3', segment:'Compacte', gearbox:'Automatique', fuel:'Essence', seats:5, bags:2, price_per_day:0, image:'./img/c3-darkgrey-auto-essence.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'p208-white-auto-essence', name_fr:'Peugeot 208 - White - Manuelle - Diesel', name_en:'Peugeot 208 - White - Manual - Diesel', name_ar:'\u0628\u064a\u0648\u062c\u0648 208', segment:'Compacte', gearbox:'Manuelle', fuel:'Diesel', seats:5, bags:2, price_per_day:0, image:'./img/p208-white-auto-essence.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'p208-yellow-auto-essence', name_fr:'Peugeot 208 - Yellow - Manuelle - Diesel', name_en:'Peugeot 208 - Yellow - Manual - Diesel', name_ar:'\u0628\u064a\u0648\u062c\u0648 208', segment:'Compacte', gearbox:'Manuelle', fuel:'Diesel', seats:5, bags:2, price_per_day:0, image:'./img/p208-yellow-auto-essence.jpg', features:['Airbag','AC','Bluetooth']},
    {id:'i10-blue-auto-essence', name_fr:'Hyundai i10 - Blue - Automatique - Essence', name_en:'Hyundai i10 - Blue - Automatic - Petrol', name_ar:'\u0647\u064a\u0648\u0646\u062f\u0627\u064a i10', segment:'Mini', gearbox:'Automatique', fuel:'Essence', seats:4, bags:1, price_per_day:220, image:'./img/i10-blue-auto-essence.jpg', features:['Airbag','AC','USB']},
    {id:'i20-black-auto-essence', name_fr:'Hyundai i20 - Black - Automatique - Essence', name_en:'Hyundai i20 - Black - Automatic - Petrol', name_ar:'\u0647\u064a\u0648\u0646\u062f\u0627\u064a i20', segment:'Compacte', gearbox:'Automatique', fuel:'Essence', seats:5, bags:2, price_per_day:300, image:'./img/i20-black-auto-essence.jpg', features:['Airbag','AC','Bluetooth']}
  ];

  const VALUE_LABELS = {
    fr:{
      segment:{Economique:'\u00C9conomique', Compacte:'Compacte', SUV:'SUV', Mini:'Citadine'},
      gearbox:{Manuelle:'Manuelle', Automatique:'Automatique'},
      fuel:{Essence:'Essence', Diesel:'Diesel'},
      extras:{gps:'GPS', baby:'Si\u00E8ge b\u00E9b\u00E9', driver2:'Second conducteur'}
    },
    en:{
      segment:{Economique:'Economy', Compacte:'Compact', SUV:'SUV', Mini:'City'},
      gearbox:{Manuelle:'Manual', Automatique:'Automatic'},
      fuel:{Essence:'Petrol', Diesel:'Diesel'},
      extras:{gps:'GPS', baby:'Baby seat', driver2:'Second driver'}
    },
    ar:{
      segment:{Economique:'\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629', Compacte:'\u0645\u062f\u0645\u062c\u0629', SUV:'\u062f\u0641\u0639 \u0631\u0628\u0627\u0639\u064a', Mini:'\u0645\u062f\u0646\u064a\u0629'},
      gearbox:{Manuelle:'\u064a\u062f\u0648\u064a', Automatique:'\u0623\u0648\u062a\u0648\u0645\u0627\u062a\u064a\u0643'},
      fuel:{Essence:'\u0628\u0646\u0632\u064a\u0646', Diesel:'\u062f\u064a\u0632\u0644'},
      extras:{gps:'\u062c\u0647\u0627\u0632 \u0645\u0644\u0627\u062d\u0629', baby:'\u0645\u0642\u0639\u062f \u0637\u0641\u0644', driver2:'\u0633\u0627\u0626\u0642 \u0625\u0636\u0627\u0641\u064a'}
    }
  };
  const PREVIEW_LABELS = {
    fr:{rate:'Tarif', seats:'Places', bags:'Bagages', transmission:'Transmission', fuel:'Essence', features:'\u00C9quipements'},
    en:{rate:'Rate', seats:'Seats', bags:'Bags', transmission:'Transmission', fuel:'Fuel', features:'Highlights'},
    ar:{rate:'\u0627\u0644\u0633\u0639\u0631', seats:'\u0639\u062f\u062f \u0627\u0644\u0645\u0642\u0627\u0639\u062f', bags:'\u0627\u0644\u0623\u0645\u062a\u0639\u0629', transmission:'\u0646\u0627\u0642\u0644 \u0627\u0644\u062d\u0631\u0643\u0629', fuel:'\u0627\u0644\u0648\u0642\u0648\u062f', features:'\u0623\u0628\u0631\u0632 \u0627\u0644\u0645\u0632\u0627\u064a\u0627'}
  };
  const SUMMARY_LABELS = {
    fr:{title:'R&eacute;capitulatif', model:'Mod&egrave;le', location:'Lieu', pickup:'D&eacute;part', dropoff:'Retour', options:'Options', total:'Estimation', none:'Aucune', day:'jour', days:'jours'},
    en:{title:'Summary', model:'Model', location:'Location', pickup:'Pickup', dropoff:'Return', options:'Options', total:'Estimate', none:'None', day:'day', days:'days'},
    ar:{title:'\u0627\u0644\u0645\u0644\u062e\u0635', model:'\u0627\u0644\u0645\u0648\u062f\u064a\u0644', location:'\u0627\u0644\u0645\u0643\u0627\u0646', pickup:'\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645', dropoff:'\u0627\u0644\u062a\u0633\u0644\u064a\u0645', options:'\u0627\u0644\u062e\u064a\u0627\u0631\u0627\u062a', total:'\u0627\u0644\u062a\u0643\u0644\u0641\u0629', none:'\u0644\u0627 \u064a\u0648\u062c\u062f', day:'\u064a\u0648\u0645', days:'\u0623\u064a\u0627\u0645'}
  };

  const LANG_LABELS = {
    fr:'Basculer la langue (FR)',
    en:'Switch language (EN)',
    ar:'\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0644\u063A\u0629 (AR)'
  };

  const WA_TEMPLATES = {
    fr:{greeting:'Bonjour,', intent:'Je souhaite r\u00e9server une voiture.', model:'*Mod\u00e8le :*', duration:'*Dur\u00e9e :*', day:'jour', days:'jours', thanks:'Merci de me confirmer la disponibilit\u00e9.'},
    en:{greeting:'Hello,', intent:'I would like to book a car.', model:'*Model:*', duration:'*Duration:*', day:'day', days:'days', thanks:'Please confirm availability. Thank you.'},
    ar:{greeting:'\u0645\u0631\u062d\u0628\u0627\u064b\u060c', intent:'\u0623\u0631\u063a\u0628 \u0641\u064a \u062d\u062c\u0632 \u0633\u064a\u0627\u0631\u0629.', model:'*\u0627\u0644\u0645\u0648\u062f\u064a\u0644:*', duration:'*\u0627\u0644\u0645\u062f\u0629:*', day:'\u064a\u0648\u0645', days:'\u0623\u064a\u0627\u0645', thanks:'\u064a\u0631\u062c\u0649 \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062a\u0648\u0641\u0631. \u0634\u0643\u0631\u0627\u064b.'}
  };

  const I18N = {
    fr:{
      nav_home:'Accueil',
      nav_fleet:'Notre flotte',
      nav_pricing:'Tarifs',
      nav_booking:'R&eacute;servation',
      nav_about:'&Agrave; propos',
      nav_contact:'Contact',
      nav_privacy:'Confidentialit&eacute;',
      skip_to_content:'Aller au contenu',
      nav_toggle_label:'Basculer le menu',
      hero_title:'Location de voitures &agrave; Mekn&egrave;s &mdash; professionnel, rapide, fiable.',
      hero_slogan:'Votre voiture au bon prix, au bon moment.',
      cta_book:'R&eacute;server maintenant',
      cta_fleet:'Voir la flotte',
      badge_1:'Assistance 24/7',
      badge_2:'Livraison A&eacute;roport/H&ocirc;tel',
      badge_3:'Paiement s&eacute;curis&eacute;',
      featured:'V&eacute;hicules en vedette',
      fleet_title:'Notre flotte',
      testimonials:'Ils nous font confiance',
      testimonial_1:'&laquo;&nbsp;Service impeccable et livraison rapide &agrave; l&rsquo;h&ocirc;tel.&nbsp;&raquo; &mdash; Salma',
      testimonial_2:'&laquo;&nbsp;Voiture propre, prix clair, aucune mauvaise surprise.&nbsp;&raquo; &mdash; Youssef',
      testimonial_3:'&laquo;&nbsp;Support 24/7 tr&egrave;s r&eacute;actif, je recommande.&nbsp;&raquo; &mdash; Maria',
      stats_title:'Nos chiffres parlent pour nous',
      stats_subtitle:'Des centaines de trajets termin&eacute;s chaque ann&eacute;e avec une prise en charge premium.',
      stat_vehicles:'V&eacute;hicules livr&eacute;s ce trimestre',
      stat_response:'Temps moyen de r&eacute;ponse WhatsApp',
      stat_rating:'Note moyenne clients',
      stat_support:'Assistance disponible',
      services_title:'Des services pens&eacute;s pour un voyage fluide',
      service_fleet_title:'Flotte r&eacute;cente',
      service_fleet_text:'S&eacute;lection d&eacute;taill&eacute;e de citadines, compactes et SUV entretenus en interne.',
      service_delivery_title:'Livraison personnalis&eacute;e',
      service_delivery_text:'H&ocirc;tel, gare ou a&eacute;roport: nous livrons le v&eacute;hicule l&agrave; o&ugrave; vous arrivez.',
      service_cover_title:'Couverture rassurante',
      service_cover_text:'Assurance, assistance et options sur demande (si&egrave;ge b&eacute;b&eacute;, GPS, conducteur suppl&eacute;mentaire).',
      service_process_title:'Process rapide',
      service_process_text:'Signature num&eacute;rique, acompte flexible et validation instantan&eacute;e via WhatsApp.',
      steps_title:'Comment se passe votre location',
      step_choose_title:'1. Choisissez',
      step_choose_text:'S&eacute;lectionnez un mod&egrave;le selon vos dates dans la flotte ou via WhatsApp.',
      step_confirm_title:'2. Confirmez',
      step_confirm_text:'Nous validons disponibilit&eacute;, tarifs et options puis envoyons le r&eacute;capitulatif.',
      step_receive_title:'3. Recevez',
      step_receive_text:'Livraison &agrave; Mekn&egrave;s, F&egrave;s a&eacute;roport ou gare selon votre planning.',
      step_enjoy_title:'4. Profitez',
      step_enjoy_text:'Assistance 24/7 durant tout votre s&eacute;jour, retour simple et rapide.',
      cta_banner_title:'Besoin d&rsquo;une voiture pour aujourd&rsquo;hui&nbsp;?',
      cta_banner_text:'Nous trouvons une solution en moins d&rsquo;une heure partout &agrave; Mekn&egrave;s.',
      cta_book_online:'R&eacute;server en ligne',
      cta_whatsapp_direct:'WhatsApp direct',
      booking_title:'R&eacute;servation',
      booking_intro:'Choisissez votre mod&egrave;le, indiquez la dur&eacute;e souhait&eacute;e puis envoyez la demande sur WhatsApp pour une confirmation instantan&eacute;e.',
      all:'Tous',
      booking_section_choice:'Votre r&eacute;servation',
      booking_choice_note:'Choisissez le v&eacute;hicule et le lieu souhait&eacute;s.',
      model:'Mod&egrave;le',
      location:'Lieu',
      location_option_centre:'Mekn&egrave;s centre',
      location_option_station:'Gare Mekn&egrave;s',
      location_option_airport:'A&eacute;roport F&egrave;s',
      car_preview_placeholder:'S&eacute;lectionnez un mod&egrave;le pour afficher les d&eacute;tails et le tarif.',
      booking_section_schedule:'Dates (optionnel)',
      dates_optional_note:'Indiquez vos dates si vous les connaissez, sinon laissez vide.',
      pickup:'D&eacute;part',
      dropoff:'Retour',
      extras:'Options',
      gps:'GPS',
      on_request:'Sur demande',
      baby:'Si&egrave;ge b&eacute;b&eacute;',
      driver2:'Second conducteur',
      contact_method:'Contact pr&eacute;f&eacute;r&eacute;',
      contact_note:'Choisissez comment nous pouvons vous joindre pour confirmer votre demande.',
      contact_call:'Appel t&eacute;l&eacute;phonique',
      contact_whatsapp:'Message WhatsApp',
      contact_email:'Email',
      client_details:'Coordonn&eacute;es',
      name:'Nom complet',
      phone:'T&eacute;l&eacute;phone',
      email:'Email',
      message:'Message',
      message_placeholder:'Infos vol, demandes sp&eacute;ciales...',
      message_note:'Partagez vos horaires, num&eacute;ros de vol ou tout besoin particulier.',
      label_car:'Mod&egrave;le',
      label_days:'Dur&eacute;e (jours)',
      label_phone:'Num&eacute;ro WhatsApp',
      estimate_label:'Estimation',
      submit_request:'Envoyer la demande',
      send_email:'Envoyer par email',
      cta_call:'Appeler VIGICAR',
      cta_whatsapp:'Discuter sur WhatsApp',
      quick_wa_title:'&#x1F4F2; R&eacute;servez votre voiture instantan&eacute;ment via WhatsApp',
      wa_badge:'R&eacute;ponse en moins d&rsquo;une heure',
      wa_intro:'Indiquez le mod&egrave;le et la dur&eacute;e pour recevoir le tarif et valider la livraison &agrave; Mekn&egrave;s ou &agrave; l&rsquo;a&eacute;roport.',
      wa_highlight_delivery:'Livraison h&ocirc;tel, gare ou a&eacute;roport de F&egrave;s.',
      wa_highlight_pricing:'Tarifs transparents et paiement flexible.',
      wa_highlight_support:'Assistance 24/7 et options sur demande.',
      send_whatsapp:'Envoyer sur WhatsApp',
      wa_note:'Votre demande part directement sur WhatsApp &#x1F4F2;',
      benefits_title:'Tout est pr&eacute;vu pour votre confort',
      benefit_delivery_title:'Livraison personnalis&eacute;e',
      benefit_delivery_text:'Remise du v&eacute;hicule &agrave; Mekn&egrave;s centre, &agrave; votre h&ocirc;tel ou directement &agrave; l&rsquo;a&eacute;roport.',
      benefit_pricing_title:'Tarifs clairs',
      benefit_pricing_text:'Pas de frais cach&eacute;s : nous confirmons le prix final avant d&rsquo;envoyer la voiture.',
      benefit_assistance_title:'Assurance &amp; assistance',
      benefit_assistance_text:'Couverture, assistance 24/7 et num&eacute;ros directs en cas de besoin.',
      benefit_options_title:'Options sur demande',
      benefit_options_text:'GPS, si&egrave;ge b&eacute;b&eacute;, conducteur suppl&eacute;mentaire... il suffit de le mentionner.',
      summary:'R&eacute;capitulatif',
      no_results:'Aucun v&eacute;hicule ne correspond &agrave; vos filtres.',
      pricing_title:'Tarifs',
      pricing_note:'Contactez-nous pour obtenir une offre personnalis&eacute;e. Les tarifs varient selon la saison et la disponibilit&eacute;.',
      quote_how_title:'Comment obtenir un devis&nbsp;?',
      quote_step1:'Choisissez vos dates et votre mod&egrave;le pr&eacute;f&eacute;r&eacute;.',
      quote_step2:'Envoyez le formulaire de r&eacute;servation ou &eacute;crivez-nous sur WhatsApp.',
      quote_step3:'Nous r&eacute;pondons sous 2&nbsp;heures avec une offre adapt&eacute;e.',
      quote_includes_title:'Ce qui est toujours inclus',
      quote_include1:'Assurance obligatoire et assistance 24/7.',
      quote_include2:'Livraison gratuite &agrave; Mekn&egrave;s centre.',
      quote_include3:'Flotte r&eacute;cente, nettoy&eacute;e apr&egrave;s chaque location.',
      deposit:'D&eacute;p&ocirc;t de garantie',
      deposit_note:'Un d&eacute;p&ocirc;t peut &ecirc;tre requis selon le mod&egrave;le et la p&eacute;riode. Restitu&eacute; si aucun dommage n&rsquo;est constat&eacute;.',
      conditions:'Conditions de location',
      conditions_item1:'Permis de conduire valide (minimum 2 ans).',
      conditions_item2:'&Acirc;ge minimum 21 ans selon le mod&egrave;le.',
      conditions_item3:'Kilom&eacute;trage selon contrat, option illimit&eacute;e disponible.',
      conditions_item4:'Livraison gratuite &agrave; Mekn&egrave;s centre. Frais possibles pour l&rsquo;a&eacute;roport de F&egrave;s ou la gare.',
      conditions_item5:'Paiements accept&eacute;s : esp&egrave;ces, carte bancaire ou virement.',
      contact_title:'Contact',
      contact_intro:'Nous sommes disponibles 7j/7 pour r&eacute;pondre &agrave; vos questions.',
      contact_phone_title:'T&eacute;l&eacute;phone',
      contact_whatsapp_title:'WhatsApp',
      contact_email_title:'Email',
      contact_address_title:'Adresse',
      contact_address_text:'Mag N&deg;1, R&eacute;sidence Kaoutar, Rue Chefchaouen, Ville Nouvelle, Mekn&egrave;s, Maroc',
      contact_map_title:'Mekn&egrave;s centre (carte)',
      about_title:'&Agrave; propos de VIGICAR',
      about_intro_1:'VIGICAR est une entreprise locale bas&eacute;e &agrave; Mekn&egrave;s et sp&eacute;cialis&eacute;e dans la location de voitures.',
      about_intro_2:'Nous couvrons Mekn&egrave;s et ses environs avec une assistance 24/7 pour un voyage sans stress.',
      about_list_1:'Livraison gratuite &agrave; Mekn&egrave;s centre',
      about_list_2:'Assistance 24/7',
      about_list_3:'Flotte r&eacute;cente et entretenue',
      privacy_title:'Confidentialit&eacute;',
      privacy_fr:'Nous collectons uniquement les informations n&eacute;cessaires pour traiter votre r&eacute;servation (nom, t&eacute;l&eacute;phone, email, d&eacute;tails de location). Aucune donn&eacute;e n&rsquo;est partag&eacute;e avec des tiers sauf obligation l&eacute;gale. Contactez <a href=\"mailto:vigicar@gmail.com\">vigicar@gmail.com</a> pour toute demande de rectification ou suppression.',
      privacy_en:'We only collect the information required to process your booking (name, phone, email, rental details). No data is shared with third parties unless required by law. Contact <a href=\"mailto:vigicar@gmail.com\">vigicar@gmail.com</a> to update or delete your data.',
      terms_title:'Conditions g&eacute;n&eacute;rales',
      terms_fr:'La r&eacute;servation est confirm&eacute;e apr&egrave;s validation par VIGICAR. Une caution peut &ecirc;tre demand&eacute;e lors de la remise du v&eacute;hicule. Les conducteurs suppl&eacute;mentaires doivent &ecirc;tre d&eacute;clar&eacute;s &agrave; l&rsquo;avance.',
      terms_en:'The booking is confirmed once VIGICAR validates it. A security deposit may be requested when collecting the vehicle. Additional drivers must be declared in advance.',
      cookie_msg:'Nous utilisons uniquement des cookies essentiels pour am&eacute;liorer votre exp&eacute;rience.',
      cookie_accept:'J&rsquo;accepte',
      quick_links:'Liens rapides',
      hours:'Horaires',
      monsun:'Lun&ndash;Dim : 08:00&ndash;22:00',
      footer_eyebrow:'Toujours disponibles',
      footer_cta_title:'Parlons de votre prochaine location',
      footer_cta_text:'Assistance 24/7, r&eacute;ponse rapide sur WhatsApp ou t&eacute;l&eacute;phone.',
      footer_btn_whatsapp:'WhatsApp',
      footer_contacts_title:'Contacts directs',
      footer_whatsapp_main:'WhatsApp principal',
      footer_whatsapp_agency:'WhatsApp agence',
      footer_emergency:'Service d&rsquo;urgence 24/7',
      footer_company:'VIGICAR &mdash; Location de voitures &agrave; Mekn&egrave;s',
      footer_director:'ZINE DINE YAHIA, Directeur g&eacute;n&eacute;ral',
      footer_contact_info:'T&eacute;l: <a href=\"tel:+212663650333\">+212 6 63 650 333</a> / <a href=\"tel:+212660946555\">+212 6 60 94 65 55</a> &middot; WhatsApp: <a href=\"https://wa.me/212663650333\" target=\"_blank\" rel=\"noopener\">wa.me/212663650333</a> / <a href=\"https://wa.me/212660946555\" target=\"_blank\" rel=\"noopener\">wa.me/212660946555</a><br>Email: <a href=\"mailto:vigicar@gmail.com\">vigicar@gmail.com</a><br>Adresse: Mag N&deg;1, R&eacute;sidence Kaoutar, Rue Chefchaouen, Ville Nouvelle, Mekn&egrave;s, Maroc',
      footer_copy_label:'VIGICAR &mdash; Tous droits r&eacute;serv&eacute;s.',
      validation_required:'Champ obligatoire',
      validation_return:'La date de retour doit &ecirc;tre post&eacute;rieure &agrave; la date de d&eacute;part'
    },
    en:{
      nav_home:'Home',
      nav_fleet:'Fleet',
      nav_pricing:'Pricing',
      nav_booking:'Booking',
      nav_about:'About',
      nav_contact:'Contact',
      nav_privacy:'Privacy',
      skip_to_content:'Skip to content',
      nav_toggle_label:'Toggle menu',
      hero_title:'Car rental in Mekn&egrave;s &mdash; professional, fast, reliable.',
      hero_slogan:'The right car at the right price, on time.',
      cta_book:'Book now',
      cta_fleet:'View fleet',
      badge_1:'24/7 assistance',
      badge_2:'Airport/Hotel delivery',
      badge_3:'Secure payment',
      featured:'Featured vehicles',
      fleet_title:'Our fleet',
      testimonials:'Trusted by travelers',
      testimonial_1:'&ldquo;Impeccable service and fast hotel delivery.&rdquo; &mdash; Salma',
      testimonial_2:'&ldquo;Clean car, transparent pricing, no surprises.&rdquo; &mdash; Youssef',
      testimonial_3:'&ldquo;Very responsive 24/7 support, highly recommended.&rdquo; &mdash; Maria',
      stats_title:'Our numbers say it all',
      stats_subtitle:'Hundreds of completed trips each year with premium support.',
      stat_vehicles:'Vehicles delivered this quarter',
      stat_response:'Average WhatsApp response time',
      stat_rating:'Average customer rating',
      stat_support:'Assistance available',
      services_title:'Services built for a smooth trip',
      service_fleet_title:'Modern fleet',
      service_fleet_text:'Curated city cars, compacts and SUVs maintained in-house.',
      service_delivery_title:'Tailored delivery',
      service_delivery_text:'Hotel, train station or airport: we deliver where you land.',
      service_cover_title:'Reassuring coverage',
      service_cover_text:'Insurance, assistance and on-demand options (baby seat, GPS, extra driver).',
      service_process_title:'Fast process',
      service_process_text:'Digital signature, flexible deposit and instant WhatsApp confirmation.',
      steps_title:'How your rental works',
      step_choose_title:'1. Choose',
      step_choose_text:'Pick a model for your dates from the fleet or via WhatsApp.',
      step_confirm_title:'2. Confirm',
      step_confirm_text:'We confirm availability, pricing and options, then send the summary.',
      step_receive_title:'3. Receive',
      step_receive_text:'Delivery in Mekn&egrave;s, F&egrave;s airport or the train station to match your schedule.',
      step_enjoy_title:'4. Enjoy',
      step_enjoy_text:'24/7 assistance throughout your stay, easy and fast return.',
      cta_banner_title:'Need a car for today?',
      cta_banner_text:'We arrange a solution within an hour anywhere in Mekn&egrave;s.',
      cta_book_online:'Book online',
      cta_whatsapp_direct:'WhatsApp direct',
      booking_title:'Booking',
      booking_intro:'Pick your model, choose the desired duration then send the request on WhatsApp for an instant confirmation.',
      all:'All',
      booking_section_choice:'Your booking',
      booking_choice_note:'Select your preferred vehicle and pickup location.',
      model:'Model',
      location:'Location',
      location_option_centre:'Mekn&egrave;s center',
      location_option_station:'Mekn&egrave;s station',
      location_option_airport:'F&egrave;s airport',
      car_preview_placeholder:'Pick a model to view full details and pricing.',
      booking_section_schedule:'Dates (optional)',
      dates_optional_note:'Add your dates if you already know them, otherwise leave blank.',
      pickup:'Pickup',
      dropoff:'Return',
      extras:'Extras',
      gps:'GPS',
      on_request:'On request',
      baby:'Baby seat',
      driver2:'Second driver',
      contact_method:'Preferred contact',
      contact_note:'Tell us how we should reach you to confirm the booking.',
      contact_call:'Phone call',
      contact_whatsapp:'WhatsApp message',
      contact_email:'Email',
      client_details:'Client details',
      name:'Full name',
      phone:'Phone',
      email:'Email',
      message:'Message',
      message_placeholder:'Flight info, special requests...',
      message_note:'Share flight numbers, timing or any particular need.',
      label_car:'Model',
      label_days:'Duration (days)',
      label_phone:'WhatsApp number',
      estimate_label:'Estimate',
      submit_request:'Send request',
      send_email:'Send by email',
      cta_call:'Call VIGICAR',
      cta_whatsapp:'Chat on WhatsApp',
      quick_wa_title:'&#x1F4F2; Book your car instantly via WhatsApp',
      wa_badge:'Reply within one hour',
      wa_intro:'Tell us the model and duration to receive pricing and confirm delivery in Mekn&egrave;s or at the airport.',
      wa_highlight_delivery:'Delivery to hotel, station or F&egrave;s airport.',
      wa_highlight_pricing:'Transparent pricing with flexible payment.',
      wa_highlight_support:'24/7 assistance with options on request.',
      send_whatsapp:'Send to WhatsApp',
      wa_note:'Your request goes straight to WhatsApp &#x1F4F2;',
      benefits_title:'Everything is arranged for your comfort',
      benefit_delivery_title:'Tailored delivery',
      benefit_delivery_text:'Vehicle handover in Mekn&egrave;s centre, at your hotel or directly at the airport.',
      benefit_pricing_title:'Clear pricing',
      benefit_pricing_text:'No hidden fees: we confirm the final amount before dispatching the car.',
      benefit_assistance_title:'Insurance &amp; assistance',
      benefit_assistance_text:'Coverage, 24/7 assistance and direct numbers whenever needed.',
      benefit_options_title:'Options on request',
      benefit_options_text:'GPS, baby seat, additional driver... just mention it.',
      summary:'Summary',
      no_results:'No vehicles match your filters.',
      pricing_title:'Pricing',
      pricing_note:'Contact us for a tailored quote. Rates may vary with season and availability.',
      quote_how_title:'How to get a quote?',
      quote_step1:'Select your dates and preferred model.',
      quote_step2:'Submit the booking form or message us on WhatsApp.',
      quote_step3:'We reply within 2 hours with a tailored offer.',
      quote_includes_title:'Always included',
      quote_include1:'Mandatory insurance and 24/7 assistance.',
      quote_include2:'Free delivery within Mekn&egrave;s centre.',
      quote_include3:'Recent fleet, cleaned after every rental.',
      deposit:'Security deposit',
      deposit_note:'A deposit may be required depending on the model and season. It is refunded if no damage is reported.',
      conditions:'Rental conditions',
      conditions_item1:'Valid driving licence (minimum 2 years).',
      conditions_item2:'Minimum age 21 depending on the model.',
      conditions_item3:'Mileage according to contract, unlimited option available.',
      conditions_item4:'Free delivery within Mekn&egrave;s centre. Fees may apply for F&egrave;s airport or the station.',
      conditions_item5:'Payments accepted: cash, card or bank transfer.',
      contact_title:'Contact',
      contact_intro:'We are available 7 days a week to help you.',
      contact_phone_title:'Phone',
      contact_whatsapp_title:'WhatsApp',
      contact_email_title:'Email',
      contact_address_title:'Address',
      contact_address_text:'Mag N&deg;1, R&eacute;sidence Kaoutar, Rue Chefchaouen, Ville Nouvelle, Mekn&egrave;s, Morocco',
      contact_map_title:'Mekn&egrave;s centre (map)',
      about_title:'About VIGICAR',
      about_intro_1:'VIGICAR is a local car rental company based in Mekn&egrave;s.',
      about_intro_2:'We cover Mekn&egrave;s and nearby areas with 24/7 support for stress-free travel.',
      about_list_1:'Free delivery in Mekn&egrave;s centre',
      about_list_2:'24/7 assistance',
      about_list_3:'Recent, well maintained fleet',
      privacy_title:'Privacy',
      privacy_fr:'We only collect the information required to process your booking (name, phone, email, rental details). No data is shared with third parties unless required by law. Contact <a href=\"mailto:vigicar@gmail.com\">vigicar@gmail.com</a> to update or delete your data.',
      privacy_en:'We only collect the information required to process your booking (name, phone, email, rental details). No data is shared with third parties unless required by law. Contact <a href=\"mailto:vigicar@gmail.com\">vigicar@gmail.com</a> to update or delete your data.',
      terms_title:'Terms &amp; conditions',
      terms_fr:'The booking is confirmed once VIGICAR validates it. A security deposit may be requested when collecting the vehicle. Additional drivers must be declared in advance.',
      terms_en:'The booking is confirmed once VIGICAR validates it. A security deposit may be requested when collecting the vehicle. Additional drivers must be declared in advance.',
      cookie_msg:'We only use essential cookies to improve your experience.',
      cookie_accept:'I agree',
      quick_links:'Quick links',
      hours:'Opening hours',
      monsun:'Mon&ndash;Sun: 08:00&ndash;22:00',
      footer_eyebrow:'Always available',
      footer_cta_title:'Let&rsquo;s plan your next rental',
      footer_cta_text:'24/7 assistance, fast responses on WhatsApp or by phone.',
      footer_btn_whatsapp:'WhatsApp',
      footer_contacts_title:'Direct contacts',
      footer_whatsapp_main:'Main WhatsApp',
      footer_whatsapp_agency:'Agency WhatsApp',
      footer_emergency:'24/7 emergency service',
      footer_company:'VIGICAR &mdash; Car rental in Mekn&egrave;s',
      footer_director:'ZINE DINE YAHIA, Managing Director',
      footer_contact_info:'Phone: <a href=\"tel:+212663650333\">+212 6 63 650 333</a> / <a href=\"tel:+212660946555\">+212 6 60 94 65 55</a> &middot; WhatsApp: <a href=\"https://wa.me/212663650333\" target=\"_blank\" rel=\"noopener\">wa.me/212663650333</a> / <a href=\"https://wa.me/212660946555\" target=\"_blank\" rel=\"noopener\">wa.me/212660946555</a><br>Email: <a href=\"mailto:vigicar@gmail.com\">vigicar@gmail.com</a><br>Address: Mag N&deg;1, R&eacute;sidence Kaoutar, Rue Chefchaouen, Ville Nouvelle, Mekn&egrave;s, Morocco',
      footer_copy_label:'VIGICAR &mdash; All rights reserved.',
      validation_required:'This field is required',
      validation_return:'Return date must be after pickup date'
    },
    ar:{
      nav_home:'\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',
      nav_fleet:'\u0623\u0633\u0637\u0648\u0644\u0646\u0627',
      nav_pricing:'\u0627\u0644\u0623\u0633\u0639\u0627\u0631',
      nav_booking:'\u0627\u0644\u062d\u062c\u0632',
      nav_about:'\u0645\u0646 \u0646\u062d\u0646',
      nav_contact:'\u0627\u062a\u0635\u0644 \u0628\u0646\u0627',
      nav_privacy:'\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629',
      skip_to_content:'\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649',
      nav_toggle_label:'\u062a\u0628\u062f\u064a\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629',
      hero_title:'\u062a\u0623\u062c\u064a\u0631 \u0633\u064a\u0627\u0631\u0627\u062a \u0641\u064a \u0645\u0643\u0646\u0627\u0633 &mdash; \u0628\u0633\u0631\u0639\u0629 \u0648\u0628\u0633\u0647\u0648\u0644\u0629 \u0648\u0645\u0648\u062b\u0648\u0642\u064a\u0629.',
      hero_slogan:'\u0633\u064a\u0627\u0631\u062a\u0643 \u0628\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0645\u0646\u0627\u0633\u0628.',
      cta_book:'\u0627\u062d\u062c\u0632 \u0627\u0644\u0622\u0646',
      cta_fleet:'\u0639\u0631\u0636 \u0627\u0644\u0623\u0633\u0637\u0648\u0644',
      badge_1:'\u0645\u0633\u0627\u0639\u062f\u0629 24/7',
      badge_2:'\u062a\u0648\u0635\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0637\u0627\u0631/\u0627\u0644\u0641\u0646\u062f\u0642',
      badge_3:'\u062f\u0641\u0639 \u0622\u0645\u0646',
      featured:'\u0633\u064a\u0627\u0631\u0627\u062a \u0645\u0645\u064a\u0632\u0629',
      fleet_title:'\u0623\u0633\u0637\u0648\u0644\u0646\u0627',
      testimonials:'\u0622\u0631\u0627\u0621 \u0639\u0645\u0644\u0627\u0626\u0646\u0627',
      testimonial_1:'&laquo;&nbsp;\u062e\u062f\u0645\u0629 \u0645\u062a\u0643\u0627\u0645\u0644\u0629 \u0648\u062a\u0648\u0635\u064a\u0644 \u0633\u0631\u064a\u0639 \u0625\u0644\u0649 \u0627\u0644\u0641\u0646\u062f\u0642.&nbsp;&raquo; &mdash; \u0633\u0644\u0645\u0649',
      testimonial_2:'&laquo;&nbsp;\u0633\u064a\u0627\u0631\u0629 \u0646\u0638\u064a\u0641\u0629 \u0648\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0636\u062d\u0629 \u062f\u0648\u0646 \u0645\u0641\u0627\u062c\u0622\u062a.&nbsp;&raquo; &mdash; \u064a\u0648\u0633\u0641',
      testimonial_3:'&laquo;&nbsp;\u062f\u0639\u0645 \u0633\u0627\u0639\u0627\u062a\u064a \u0645\u062a\u0648\u0627\u062c\u062f \u0628\u0633\u0631\u0639\u0629. \u0623\u0646\u0635\u062d \u0628\u0647\u0627.&nbsp;&raquo; &mdash; \u0645\u0627\u0631\u064a\u0627',
      stats_title:'\u0623\u0631\u0642\u0627\u0645\u0646\u0627 \u062a\u062a\u062d\u062f\u062b \u0639\u0646 \u062c\u0648\u062f\u0629 \u062e\u062f\u0645\u062a\u0646\u0627',
      stats_subtitle:'\u0645\u0626\u0627\u062a \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0645\u0644\u0629 \u0643\u0644 \u0639\u0627\u0645 \u0645\u0639 \u0645\u062a\u0627\u0628\u0639\u0629 \u0648\u062f\u0639\u0645 \u0645\u0645\u064a\u0632.',
      stat_vehicles:'\u0633\u064a\u0627\u0631\u0627\u062a \u0645\u0633\u0644\u0651\u0645\u0629 \u0647\u0630\u0627 \u0627\u0644\u0631\u0628\u0639',
      stat_response:'\u0645\u062a\u0648\u0633\u0637 \u0648\u0642\u062a \u0627\u0644\u0631\u062f \u0639\u0644\u0649 \u0648\u0627\u062a\u0633\u0627\u0628',
      stat_rating:'\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0639\u0645\u0644\u0627\u0621',
      stat_support:'\u0627\u0644\u062f\u0639\u0645 \u0645\u062a\u0627\u062d',
      services_title:'\u062e\u062f\u0645\u0627\u062a \u0645\u064f\u0647\u064a\u0651\u0623\u0629 \u0644\u0631\u062d\u0644\u0629 \u0633\u0644\u0633\u0629',
      service_fleet_title:'\u0623\u0633\u0637\u0648\u0644 \u062d\u062f\u064a\u062b',
      service_fleet_text:'\u0627\u062e\u062a\u064a\u0627\u0631 \u062f\u0642\u064a\u0642 \u0644\u0633\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0648\u0627\u0644\u0645\u062f\u0645\u062c\u0629 \u0648\u0640SUV \u0645\u0639 \u0635\u064a\u0627\u0646\u0629 \u062f\u0627\u062e\u0644\u064a\u0629.',
      service_delivery_title:'\u062a\u0633\u0644\u064a\u0645 \u0645\u062e\u0635\u0651\u0635',
      service_delivery_text:'\u0641\u0646\u062f\u0642\u060c \u0645\u062d\u0637\u0629 \u0623\u0648 \u0645\u0637\u0627\u0631: \u0646\u064f\u0633\u0644\u0651\u0645 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u062d\u064a\u062b \u062a\u0635\u0644.',
      service_cover_title:'\u062a\u063a\u0637\u064a\u0629 \u0645\u0637\u0645\u0626\u0646\u0629',
      service_cover_text:'\u062a\u0623\u0645\u064a\u0646\u060c \u0645\u0633\u0627\u0639\u062f\u0629 \u0648\u062e\u064a\u0627\u0631\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629 (\u0645\u0642\u0639\u062f \u0637\u0641\u0644\u060c GPS\u060c \u0633\u0627\u0626\u0642 \u0625\u0636\u0627\u0641\u064a).',
      service_process_title:'\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0633\u0631\u064a\u0639\u0629',
      service_process_text:'\u062a\u0648\u0642\u064a\u0639 \u0631\u0642\u0645\u064a\u060c \u0639\u0631\u0628\u0648\u0646 \u0645\u0631\u0646 \u0648\u062a\u0623\u0643\u064a\u062f \u0641\u0648\u0631\u064a \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.',
      steps_title:'\u0643\u064a\u0641 \u062a\u062a\u0645 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u0623\u062c\u064a\u0631',
      step_choose_title:'\u0661. \u0627\u062e\u062a\u0631',
      step_choose_text:'\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0648\u062f\u064a\u0644 \u0648\u0627\u0644\u062a\u0648\u0627\u0631\u064a\u062e \u0639\u0628\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0623\u0648 \u0648\u0627\u062a\u0633\u0627\u0628.',
      step_confirm_title:'\u0662. \u0623\u0643\u062f',
      step_confirm_text:'\u0646\u0624\u0643\u062f \u0627\u0644\u062a\u0648\u0641\u0631 \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0644\u062e\u064a\u0627\u0631\u0627\u062a \u062b\u0645 \u0646\u0631\u0633\u0644 \u0627\u0644\u0645\u0644\u062e\u0635.',
      step_receive_title:'\u0663. \u0627\u0633\u062a\u0644\u0645',
      step_receive_text:'\u062a\u0633\u0644\u064a\u0645 \u0641\u064a \u0645\u0643\u0646\u0627\u0633\u060c \u0645\u0637\u0627\u0631 \u0641\u0627\u0633 \u0623\u0648 \u0627\u0644\u0645\u062d\u0637\u0629 \u062d\u0633\u0628 \u0628\u0631\u0646\u0627\u0645\u062c\u0643.',
      step_enjoy_title:'\u0664. \u0627\u0633\u062a\u0645\u062a\u0639',
      step_enjoy_text:'\u0645\u0633\u0627\u0646\u062f\u0629 24/7 \u0637\u0648\u0627\u0644 \u0625\u0642\u0627\u0645\u062a\u0643 \u0648\u0625\u0631\u062c\u0627\u0639 \u0633\u0647\u0644 \u0648\u0633\u0631\u064a\u0639.',
      cta_banner_title:'\u0647\u0644 \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0633\u064a\u0627\u0631\u0629 \u0627\u0644\u064a\u0648\u0645\u061f',
      cta_banner_text:'\u0646\u062c\u062f \u062d\u0644\u0627\u064b \u0641\u064a \u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629 \u0641\u064a \u0623\u064a \u0645\u0643\u0627\u0646 \u0628\u0645\u0643\u0646\u0627\u0633.',
      cta_book_online:'\u0627\u062d\u062c\u0632 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a',
      cta_whatsapp_direct:'\u0648\u0627\u062a\u0633\u0627\u0628 \u0645\u0628\u0627\u0634\u0631',
      booking_title:'\u0627\u0644\u062d\u062c\u0632',
      booking_intro:'\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0648\u062f\u064a\u0644 \u0648\u0627\u0644\u0645\u062f\u0629 \u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0637\u0644\u0628 \u0639\u0644\u0649 \u0648\u0627\u062a\u0633\u0627\u0628 \u0644\u0644\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0641\u0648\u0631\u064a.',
      all:'\u0627\u0644\u0643\u0644',
      booking_section_choice:'\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062d\u062c\u0632',
      booking_choice_note:'\u0627\u062e\u062a\u0631 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0648\u0645\u0643\u0627\u0646 \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0630\u064a \u062a\u0641\u0636\u0644\u0647.',
      model:'\u0627\u0644\u0645\u0648\u062f\u064a\u0644',
      location:'\u0627\u0644\u0645\u0643\u0627\u0646',
      location_option_centre:'\u0645\u0643\u0646\u0627\u0633 \u0627\u0644\u0645\u0631\u0643\u0632',
      location_option_station:'\u0645\u062d\u0637\u0629 \u0645\u0643\u0646\u0627\u0633',
      location_option_airport:'\u0645\u0637\u0627\u0631 \u0641\u0627\u0633',
      car_preview_placeholder:'\u0627\u062e\u062a\u0631 \u0633\u064a\u0627\u0631\u0629 \u0644\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0648\u0627\u0644\u0633\u0639\u0631.',
      booking_section_schedule:'\u0627\u0644\u062a\u0648\u0627\u0631\u064a\u062e (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)',
      dates_optional_note:'\u0623\u062f\u062e\u0644 \u0627\u0644\u062a\u0648\u0627\u0631\u064a\u062e \u0625\u0630\u0627 \u0643\u0627\u0646\u062a \u0645\u0639\u0631\u0648\u0641\u0629 \u0623\u0648 \u0627\u062a\u0631\u0643\u0647\u0627 \u0641\u0627\u0631\u063a\u0629.',
      pickup:'\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645',
      dropoff:'\u0627\u0644\u062a\u0633\u0644\u064a\u0645',
      extras:'\u062e\u064a\u0627\u0631\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629',
      gps:'GPS',
      on_request:'\u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628',
      baby:'\u0645\u0642\u0639\u062f \u0637\u0641\u0644',
      driver2:'\u0633\u0627\u0626\u0642 \u0625\u0636\u0627\u0641\u064a',
      contact_method:'\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0641\u0636\u0644\u0629',
      contact_note:'\u0623\u062e\u0628\u0631\u0646\u0627 \u0643\u064a\u0641 \u0646\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0644\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u062c\u0632.',
      contact_call:'\u0645\u0643\u0627\u0644\u0645\u0629 \u0647\u0627\u062a\u0641\u064a\u0629',
      contact_whatsapp:'\u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062a\u0633\u0627\u0628',
      contact_email:'\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
      client_details:'\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0639\u0645\u064a\u0644',
      name:'\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644',
      phone:'\u0627\u0644\u0647\u0627\u062a\u0641',
      email:'\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
      message:'\u0631\u0633\u0627\u0644\u0629',
      message_placeholder:'\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0631\u062d\u0644\u0629\u060c \u0637\u0644\u0628\u0627\u062a \u062e\u0627\u0635\u0629...',
      message_note:'\u0630\u0643\u0631 \u0627\u0644\u0623\u0648\u0642\u0627\u062a \u0623\u0648 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0623\u0648 \u0623\u064a \u0637\u0644\u0628\u0627\u062a \u062e\u0627\u0635\u0629.',
      label_car:'\u0627\u0644\u0645\u0648\u062f\u064a\u0644',
      label_days:'\u0627\u0644\u0645\u062f\u0629 (\u0623\u064a\u0627\u0645)',
      label_phone:'\u0631\u0642\u0645 \u0648\u0627\u062a\u0633\u0627\u0628',
      estimate_label:'\u0627\u0644\u062a\u0642\u062f\u064a\u0631',
      submit_request:'\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628',
      send_email:'\u0625\u0631\u0633\u0627\u0644 \u0628\u0627\u0644\u0628\u0631\u064a\u062f',
      cta_call:'\u0627\u062a\u0635\u0644 \u0628\u0640 VIGICAR',
      cta_whatsapp:'\u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628',
      quick_wa_title:'\u1f4f2 \u0627\u062d\u062c\u0632 \u0633\u064a\u0627\u0631\u062a\u0643 \u0641\u0648\u0631\u0627\u064b \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628',
      wa_badge:'\u0631\u062f \u062e\u0644\u0627\u0644 \u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629',
      wa_intro:'\u0627\u0630\u0643\u0631 \u0627\u0644\u0645\u0648\u062f\u064a\u0644 \u0648\u0627\u0644\u0645\u062f\u0629 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0633\u0639\u0631 \u0648\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0641\u064a \u0645\u0643\u0646\u0627\u0633 \u0623\u0648 \u0627\u0644\u0645\u0637\u0627\u0631.',
      wa_highlight_delivery:'\u062a\u0633\u0644\u064a\u0645 \u0625\u0644\u0649 \u0627\u0644\u0641\u0646\u062f\u0642 \u0623\u0648 \u0627\u0644\u0645\u062d\u0637\u0629 \u0623\u0648 \u0645\u0637\u0627\u0631 \u0641\u0627\u0633.',
      wa_highlight_pricing:'\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0636\u062d\u0629 \u0648\u062f\u0641\u0639 \u0645\u0631\u0646.',
      wa_highlight_support:'\u062f\u0639\u0645 24/7 \u0648\u062e\u064a\u0627\u0631\u0627\u062a \u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628.',
      send_whatsapp:'\u0625\u0631\u0633\u0627\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628',
      wa_note:'\u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649 \u0648\u0627\u062a\u0633\u0627\u0628 \u1f4f2',
      benefits_title:'\u0643\u0644 \u0634\u064a\u0621 \u0645\u062c\u0647\u0632 \u0644\u0631\u0627\u062d\u062a\u0643',
      benefit_delivery_title:'\u062a\u0633\u0644\u064a\u0645 \u0645\u062e\u0635\u0635',
      benefit_delivery_text:'\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0641\u064a \u0645\u0631\u0643\u0632 \u0645\u0643\u0646\u0627\u0633 \u0623\u0648 \u0627\u0644\u0641\u0646\u062f\u0642 \u0623\u0648 \u0645\u0628\u0627\u0634\u0631\u0629 \u0641\u064a \u0627\u0644\u0645\u0637\u0627\u0631.',
      benefit_pricing_title:'\u0623\u0633\u0639\u0627\u0631 \u0634\u0641\u0627\u0641\u0629',
      benefit_pricing_text:'\u0628\u062f\u0648\u0646 \u0631\u0633\u0648\u0645 \u0645\u062e\u0641\u064a\u0629: \u0646\u0624\u0643\u062f \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0642\u0628\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0633\u064a\u0627\u0631\u0629.',
      benefit_assistance_title:'\u062a\u0623\u0645\u064a\u0646 \u0648\u0645\u0633\u0627\u0646\u062f\u0629',
      benefit_assistance_text:'\u062a\u063a\u0637\u064a\u0629 \u0648\u0645\u0633\u0627\u0646\u062f\u0629 24/7 \u0645\u0639 \u0623\u0631\u0642\u0627\u0645 \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0646\u062f \u0627\u0644\u062d\u0627\u062c\u0629.',
      benefit_options_title:'\u062e\u064a\u0627\u0631\u0627\u062a \u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628',
      benefit_options_text:'GPS\u060c \u0645\u0642\u0639\u062f \u0637\u0641\u0644\u060c \u0633\u0627\u0626\u0642 \u0625\u0636\u0627\u0641\u064a... \u0641\u0642\u0637 \u0623\u062e\u0628\u0631\u0646\u0627.',
      summary:'\u0627\u0644\u0645\u0644\u062e\u0635',
      no_results:'\u0644\u0627 \u062a\u0648\u062c\u062f \u0633\u064a\u0627\u0631\u0627\u062a \u062a\u0637\u0627\u0628\u0642 \u0645\u0631\u0634\u062d\u0627\u062a\u0643.',
      pricing_title:'\u0627\u0644\u0623\u0633\u0639\u0627\u0631',
      pricing_note:'\u0627\u062a\u0635\u0644 \u0628\u0646\u0627 \u0644\u062a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0636 \u062e\u0627\u0635. \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u062a\u062a\u063a\u064a\u0631 \u062d\u0633\u0628 \u0627\u0644\u0645\u0648\u0633\u0645.',
      quote_how_title:'\u0643\u064a\u0641 \u062a\u0646\u0627\u0644 \u0639\u0631\u0636\u0627\u064b\u061f',
      quote_step1:'\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u0648\u0627\u0631\u064a\u062e \u0648\u0627\u0644\u0645\u0648\u062f\u064a\u0644 \u0627\u0644\u0645\u0641\u0636\u0644.',
      quote_step2:'\u0623\u0631\u0633\u0644 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062d\u062c\u0632 \u0623\u0648 \u0631\u0627\u0633\u0644\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.',
      quote_step3:'\u0646\u0631\u062f \u062e\u0644\u0627\u0644 \u0633\u0627\u0639\u062a\u064a\u0646 \u0628\u0639\u0631\u0636 \u0645\u0646\u0627\u0633\u0628.',
      quote_includes_title:'\u062f\u0627\u0626\u0645\u0627\u064b \u0645\u0636\u0645\u0648\u0646',
      quote_include1:'\u062a\u0623\u0645\u064a\u0646 \u0625\u062c\u0628\u0627\u0631\u064a \u0648\u062f\u0639\u0645 24/7.',
      quote_include2:'\u062a\u0648\u0635\u064a\u0644 \u0645\u062c\u0627\u0646\u064a \u062f\u0627\u062e\u0644 \u0645\u0643\u0646\u0627\u0633.',
      quote_include3:'\u0623\u0633\u0637\u0648\u0644 \u062d\u062f\u064a\u062b \u0648\u0645\u0646\u0638\u0641 \u0628\u0639\u062f \u0643\u0644 \u062d\u062c\u0632.',
      deposit:'\u062a\u0623\u0645\u064a\u0646',
      deposit_note:'\u0642\u062f \u064a\u062a\u0645 \u0637\u0644\u0628 \u062a\u0623\u0645\u064a\u0646 \u062d\u0633\u0628 \u0627\u0644\u0645\u0648\u062f\u064a\u0644 \u0648\u0627\u0644\u0641\u062a\u0631\u0629. \u064a\u0633\u062a\u0631\u062c\u0639 \u0639\u0646\u062f \u0639\u062f\u0645 \u0648\u062c\u0648\u062f \u0623\u064a \u0623\u0636\u0631\u0627\u0631.',
      conditions:'\u0634\u0631\u0648\u0637 \u0627\u0644\u062a\u0623\u062c\u064a\u0631',
      conditions_item1:'\u0631\u062e\u0635\u0629 \u0633\u064a\u0627\u0642\u0629 \u0635\u0627\u0644\u062d\u0629 \u0644\u0627 \u064a\u0642\u0644 \u062a\u062c\u0631\u0628\u062a\u0647\u0627 \u0639\u0646 \u0633\u0646\u062a\u064a\u0646.',
      conditions_item2:'\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0623\u062f\u0646\u0649 21 \u0633\u0646\u0629 \u062d\u0633\u0628 \u0627\u0644\u0645\u0648\u062f\u064a\u0644.',
      conditions_item3:'\u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062a \u0628\u062d\u0633\u0628 \u0627\u0644\u0639\u0642\u062f \u0648\u064a\u0645\u0643\u0646 \u0627\u062e\u062a\u064a\u0627\u0631 \u062e\u064a\u0627\u0631 \u0645\u0633\u0627\u0641\u0627\u062a \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629.',
      conditions_item4:'\u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0645\u062c\u0627\u0646\u064a \u0641\u064a \u0645\u0643\u0646\u0627\u0633 \u0627\u0644\u0645\u0631\u0643\u0632. \u0642\u062f \u062a\u0637\u0628\u0642 \u0631\u0633\u0648\u0645 \u0644\u0645\u0637\u0627\u0631 \u0641\u0627\u0633 \u0623\u0648 \u0627\u0644\u0645\u062d\u0637\u0629.',
      conditions_item5:'\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062f\u0641\u0639: \u0646\u0642\u062f\u0627\u064b\u060c \u0628\u0637\u0627\u0642\u0629 \u0623\u0648 \u062d\u0648\u0627\u0644\u0629 \u0628\u0646\u0643\u064a\u0629.',
      contact_title:'\u0627\u062a\u0635\u0644 \u0628\u0646\u0627',
      contact_intro:'\u0646\u062d\u0646 \u0641\u064a \u062e\u062f\u0645\u062a\u0643\u0645 \u0637\u0648\u0627\u0644 \u0623\u064a\u0627\u0645 \u0627\u0644\u0623\u0633\u0628\u0648\u0639.',
      contact_phone_title:'\u0627\u0644\u0647\u0627\u062a\u0641',
      contact_whatsapp_title:'\u0648\u0627\u062a\u0633\u0627\u0628',
      contact_email_title:'\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
      contact_address_title:'\u0627\u0644\u0639\u0646\u0648\u0627\u0646',
      contact_address_text:'\u0645\u062d\u0644 \u0631\u0642\u0645 1\u060c \u0625\u0642\u0627\u0645\u0629 \u0643\u0627\u0648\u062a\u0627\u0631\u060c \u0634\u0627\u0631\u0639 \u0634\u0641\u0634\u0627\u0648\u0646\u060c \u0641\u064a\u0644\u0627 \u0646\u0648\u0641\u064a\u0644\u060c \u0645\u0643\u0646\u0627\u0633\u060c \u0627\u0644\u0645\u063a\u0631\u0628',
      contact_map_title:'\u0645\u0643\u0646\u0627\u0633 (\u062e\u0631\u064a\u0637\u0629)',
      about_title:'\u0645\u0646 \u0646\u062d\u0646',
      about_intro_1:'VIGICAR \u0634\u0631\u0643\u0629 \u0645\u062d\u0644\u064a\u0629 \u0641\u064a \u0645\u0643\u0646\u0627\u0633 \u062a\u062a\u062e\u0635\u0635 \u0641\u064a \u062a\u0623\u062c\u064a\u0631 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a.',
      about_intro_2:'\u0646\u063a\u0637\u064a \u0645\u0643\u0646\u0627\u0633 \u0648\u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0645\u062d\u064a\u0637\u0629 \u0645\u0639 \u062f\u0639\u0645 24/7 \u0644\u0631\u062d\u0644\u062a\u0643 \u0628\u062f\u0648\u0646 \u0642\u0644\u0642.',
      about_list_1:'\u062a\u0648\u0635\u064a\u0644 \u0645\u062c\u0627\u0646\u064a \u0641\u064a \u0645\u0643\u0646\u0627\u0633 \u0627\u0644\u0645\u0631\u0643\u0632',
      about_list_2:'\u062f\u0639\u0645 24/7',
      about_list_3:'\u0623\u0633\u0637\u0648\u0644 \u062d\u062f\u064a\u062b \u0648\u0645\u0635\u0627\u0646',
      privacy_title:'\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629',
      privacy_fr:'\u0646\u062c\u0645\u0639 \u0641\u0642\u0637 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0636\u0631\u0648\u0631\u064a\u0629 \u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u062d\u062c\u0632\u0643 (name, phone, email, rental details). \u0644\u0627 \u0646\u0634\u0627\u0631\u0643 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0639 \u0623\u064a \u062c\u0647\u0629 \u0625\u0644\u0627 \u0625\u0630\u0627 \u062a\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0627\u0644\u0642\u0627\u0646\u0648\u0646. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 <a href=\"mailto:vigicar@gmail.com\">vigicar@gmail.com</a> \u0644\u062a\u0639\u062f\u064a\u0644 \u0623\u0648 \u062d\u0630\u0641 \u0628\u064a\u0627\u0646\u0627\u062a\u0643.',
      privacy_en:'\u0646\u062c\u0645\u0639 \u0641\u0642\u0637 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0636\u0631\u0648\u0631\u064a\u0629 \u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u062d\u062c\u0632\u0643 (name, phone, email, rental details). \u0644\u0627 \u0646\u0634\u0627\u0631\u0643 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0639 \u0623\u064a \u062c\u0647\u0629 \u0625\u0644\u0627 \u0625\u0630\u0627 \u062a\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0627\u0644\u0642\u0627\u0646\u0648\u0646. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 <a href=\"mailto:vigicar@gmail.com\">vigicar@gmail.com</a> \u0644\u062a\u0639\u062f\u064a\u0644 \u0623\u0648 \u062d\u0630\u0641 \u0628\u064a\u0627\u0646\u0627\u062a\u0643.',
      terms_title:'\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645',
      terms_fr:'\u064a\u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u062c\u0632 \u0628\u0639\u062f \u0645\u0648\u0627\u0641\u0642\u0629 VIGICAR. \u0642\u062f \u064a\u062a\u0645 \u0637\u0644\u0628 \u062a\u0623\u0645\u064a\u0646 \u0639\u0646\u062f \u0627\u0633\u062a\u0644\u0627\u0645 \u0627\u0644\u0633\u064a\u0627\u0631\u0629. \u064a\u062c\u0628 \u062a\u0633\u062c\u064a\u0644 \u0623\u064a \u0633\u0627\u0626\u0642 \u0625\u0636\u0627\u0641\u064a \u0645\u0633\u0628\u0642\u0627\u064b.',
      terms_en:'\u064a\u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u062c\u0632 \u0628\u0639\u062f \u0645\u0648\u0627\u0641\u0642\u0629 VIGICAR. \u0642\u062f \u064a\u062a\u0645 \u0637\u0644\u0628 \u062a\u0623\u0645\u064a\u0646 \u0639\u0646\u062f \u0627\u0633\u062a\u0644\u0627\u0645 \u0627\u0644\u0633\u064a\u0627\u0631\u0629. \u064a\u062c\u0628 \u062a\u0633\u062c\u064a\u0644 \u0623\u064a \u0633\u0627\u0626\u0642 \u0625\u0636\u0627\u0641\u064a \u0645\u0633\u0628\u0642\u0627\u064b.',
      cookie_msg:'\u0646\u0633\u062a\u062e\u062f\u0645 \u0645\u0644\u0641\u0627\u062a \u0627\u0631\u062a\u0628\u0627\u0637 \u0636\u0631\u0648\u0631\u064a\u0629 \u0641\u0642\u0637 \u0644\u062a\u062d\u0633\u064a\u0646 \u062a\u062c\u0631\u0628\u062a\u0643.',
      cookie_accept:'\u0645\u0648\u0627\u0641\u0642',
      quick_links:'\u0631\u0648\u0627\u0628\u0637 \u0645\u0641\u064a\u062f\u0629',
      hours:'\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644',
      monsun:'\u0627\u0644\u0625\u062b\u0646\u064a\u0646&ndash;\u0627\u0644\u0623\u062d\u062f: 08:00&ndash;22:00',
      footer_eyebrow:'\u0645\u062a\u0648\u0627\u062c\u062f\u0648\u0646 \u062f\u0627\u0626\u0645\u0627\u064b',
      footer_cta_title:'\u062f\u0639\u0646\u0627 \u0646\u062e\u0637\u0637 \u0644\u0631\u062d\u0644\u062a\u0643 \u0627\u0644\u0642\u0627\u062f\u0645\u0629',
      footer_cta_text:'\u0645\u0633\u0627\u0646\u062f\u0629 24/7 \u0648\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0633\u0631\u064a\u0639\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0623\u0648 \u0627\u0644\u0647\u0627\u062a\u0641.',
      footer_btn_whatsapp:'\u0648\u0627\u062a\u0633\u0627\u0628',
      footer_contacts_title:'\u062c\u0647\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629',
      footer_whatsapp_main:'\u0648\u0627\u062a\u0633\u0627\u0628 \u0627\u0644\u0631\u0626\u064a\u0633\u064a',
      footer_whatsapp_agency:'\u0648\u0627\u062a\u0633\u0627\u0628 \u0627\u0644\u0648\u0643\u0627\u0644\u0629',
      footer_emergency:'\u062e\u062f\u0645\u0629 \u0637\u0648\u0627\u0631\u0626 24/7',
      footer_company:'VIGICAR &mdash; \u062a\u0623\u062c\u064a\u0631 \u0633\u064a\u0627\u0631\u0627\u062a \u0641\u064a \u0645\u0643\u0646\u0627\u0633',
      footer_director:'ZINE DINE YAHIA \u060c \u0627\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0639\u0627\u0645',
      footer_contact_info:'\u0647\u0627\u062a\u0641: <a href=\"tel:+212663650333\">+212 6 63 650 333</a> / <a href=\"tel:+212660946555\">+212 6 60 94 65 55</a> &middot; \u0648\u0627\u062a\u0633\u0627\u0628: <a href=\"https://wa.me/212663650333\" target=\"_blank\" rel=\"noopener\">wa.me/212663650333</a> / <a href=\"https://wa.me/212660946555\" target=\"_blank\" rel=\"noopener\">wa.me/212660946555</a><br>\u0628\u0631\u064a\u062f: <a href=\"mailto:vigicar@gmail.com\">vigicar@gmail.com</a><br>\u0627\u0644\u0639\u0646\u0648\u0627\u0646: \u0645\u062d\u0644 \u0631\u0642\u0645 1\u060c \u0625\u0642\u0627\u0645\u0629 \u0643\u0627\u0648\u062a\u0627\u0631\u060c \u0634\u0627\u0631\u0639 \u0634\u0641\u0634\u0627\u0648\u0646\u060c \u0641\u064a\u0644\u0627 \u0646\u0648\u0641\u064a\u0644\u060c \u0645\u0643\u0646\u0627\u0633',
      footer_copy_label:'VIGICAR &mdash; \u0643\u0627\u0641\u0629 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.',
      validation_required:'\u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628',
      validation_return:'\u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0627\u0644\u0625\u0631\u062c\u0627\u0639 \u0628\u0639\u062f \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645'
    }
  };

  let carCache = null;
  let cookieBar = null;
  const carNameCache = new Map();

  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));

  function getLang(){
    if(typeof window === 'undefined') return 'fr';
    try{
      if(!window.localStorage) return 'fr';
      const stored = window.localStorage.getItem('vigicar_lang');
      return stored && LANG_ORDER.includes(stored) ? stored : 'fr';
    }catch{
      return 'fr';
    }
  }

  function setLang(lang){
    if(typeof window === 'undefined') return;
    try{
      if(window.localStorage){
        window.localStorage.setItem('vigicar_lang', lang);
      }
    }catch{}
  }

  function currentDict(){
    return I18N[getLang()] || I18N.fr;
  }

  function translateElements(){
    const dict = currentDict();
    $$('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if(typeof value === 'function'){
        const arg = el.getAttribute('data-i18n-arg') || '';
        el.innerHTML = value(arg);
      }else if(typeof value === 'string'){
        el.innerHTML = value;
      }
    });
    $$('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(currentDict()[key]) el.setAttribute('placeholder', currentDict()[key]);
    });
    $$('[data-i18n-title]').forEach(el=>{
      const key = el.getAttribute('data-i18n-title');
      if(currentDict()[key]) el.setAttribute('title', currentDict()[key]);
    });
    $$('[data-i18n-value]').forEach(el=>{
      const key = el.getAttribute('data-i18n-value');
      if(currentDict()[key]) el.value = currentDict()[key];
    });
    $$('[data-i18n-aria-label]').forEach(el=>{
      const key = el.getAttribute('data-i18n-aria-label');
      if(currentDict()[key]) el.setAttribute('aria-label', currentDict()[key]);
    });
    document.documentElement.lang = getLang();
    document.documentElement.dir = getLang() === 'ar' ? 'rtl' : 'ltr';
  }



  // Decode HTML entities (for i18n strings like R&eacute;server)
  function decodeHTMLEntities(str){
    try{
      const el = document.createElement('textarea');
      el.innerHTML = String(str || '');
      return el.value;
    }catch{ return String(str || ''); }
  }

  function sanitiseCars(list){
    return list.map(item=>{
      const fallback = FALLBACK_CARS.find(car=>car.id === item.id) || {};
      const merged = Object.assign({}, fallback, item);
      merged.price_per_day = Number(merged.price_per_day || fallback.price_per_day || 0);
      merged.features = Array.isArray(merged.features) && merged.features.length ? merged.features : (fallback.features || []);
      merged.segment = merged.segment || fallback.segment || 'Economique';
      merged.gearbox = merged.gearbox || fallback.gearbox || 'Manuelle';
      merged.fuel = merged.fuel || fallback.fuel || 'Essence';
      merged.image = merged.image || fallback.image || './img/slider6.jpg';
      merged.seats = merged.seats || fallback.seats || 5;
      merged.bags = merged.bags || fallback.bags || 2;
      return merged;
    });
  }

  async function loadCars(){
    if(carCache) return carCache;
    if(typeof fetch !== 'function'){
      carCache = FALLBACK_CARS.slice();
      return carCache;
    }
    try{
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeout = controller ? setTimeout(()=>controller.abort(), 1200) : null;
      const response = await fetch('./data/cars.json', {
        cache:'no-store',
        signal:controller ? controller.signal : undefined
      });
      if(timeout) clearTimeout(timeout);
      if(!response.ok) throw new Error(`http ${response.status}`);
      const json = await response.json();
      const list = Array.isArray(json) ? json : [];
      carCache = list.length ? sanitiseCars(list) : FALLBACK_CARS.slice();
    }catch{
      carCache = FALLBACK_CARS.slice();
    }
    return carCache;
  }

  function carName(car){
    if(!car) return '';
    const lang = getLang();
    const cacheKey = `${car.id}-${lang}`;
    if(carNameCache.has(cacheKey)) return carNameCache.get(cacheKey);
    let name = car.name_fr || '';
    if(lang === 'en') name = car.name_en || car.name_fr || car.name_ar || '';
    if(lang === 'ar') name = car.name_ar || car.name_fr || car.name_en || '';
    carNameCache.set(cacheKey, name);
    return name;
  }

  function segmentLabel(value){
    const labels = VALUE_LABELS[getLang()] || VALUE_LABELS.fr;
    return labels.segment[value] || value;
  }

  function gearboxLabel(value){
    const labels = VALUE_LABELS[getLang()] || VALUE_LABELS.fr;
    return labels.gearbox[value] || value;
  }

  function fuelLabel(value){
    const labels = VALUE_LABELS[getLang()] || VALUE_LABELS.fr;
    return labels.fuel[value] || value;
  }

  function carColor(car){
    try{
      const name = carName(car) || '';
      const parts = name.split(' - ');
      if(parts.length >= 3){
        return (parts[1] || '').trim();
      }
    }catch{}
    return '';
  }

  function createCarCard(car){
    const dict = currentDict();
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('data-animate','');
    if(document.body && document.body.classList.contains('js-ready')){
      // When cards are re-rendered after the initial page load (e.g., language switch), ensure they stay visible.
      card.classList.add('is-visible');
    }
    const img = document.createElement('img');
    img.className = 'media';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.width = 640;
    img.height = 400;
    img.alt = carName(car);
    const markLoaded = ()=>img.classList.add('loaded');
    img.addEventListener('load', markLoaded, {once:true});
    img.addEventListener('error', ()=>{
      img.src = './img/slider6.jpg';
      markLoaded();
      try{
        const cardEl = img.closest('article');
        if(cardEl && !cardEl.querySelector('.placeholder-badge')){
          const badge = document.createElement('div');
          badge.className = 'placeholder-badge';
          badge.textContent = 'Photo a venir';
          cardEl.appendChild(badge);
        }
      }catch(e){}
    }, {once:true});
    img.src = encodeURI(car.image);
    if(img.complete && img.naturalWidth > 0){
      markLoaded();
    }else if(typeof img.decode === 'function'){
      img.decode().then(markLoaded).catch(markLoaded);
    }

    const content = document.createElement('div');
    content.className = 'content';

    const title = document.createElement('h3');
    title.textContent = carName(car);

    const meta = document.createElement('ul');
    meta.className = 'card-meta';
    [segmentLabel(car.segment), gearboxLabel(car.gearbox), fuelLabel(car.fuel)].forEach(value=>{
      if(!value) return;
      const li = document.createElement('li');
      li.textContent = value;
      meta.appendChild(li);
    });

    const tags = document.createElement('div');
    tags.className = 'tags';
    const color = carColor(car);
    if(color){
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = color;
      tags.appendChild(tag);
    }
    const featureList = Array.isArray(car.features) ? car.features : [];
    featureList.slice(0,3).forEach(feature=>{
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = feature;
      tags.appendChild(tag);
    });

    const reserve = document.createElement('div');
    reserve.className = 'card-contact';
    const phoneLabel = dict.phone || 'T\u00E9l\u00E9phone';
    reserve.innerHTML = `${phoneLabel}: <a href="tel:+212663650333">+212 6 63 650 333</a> &middot; <a href="tel:+212660946555">+212 6 60 94 65 55</a>`;

    const actions = document.createElement('div');
    actions.className = 'card-actions';
    const bookText = dict.cta_book || 'Reserver';
    const waText = dict.cta_whatsapp || 'WhatsApp';
    const book = document.createElement('a');
    book.className = 'btn primary';
    book.href = `./booking.html?model=${encodeURIComponent(carName(car))}`;
    book.setAttribute('aria-label', `${bookText} ${carName(car)}`);
    book.textContent = decodeHTMLEntities(bookText);
    const wa = document.createElement('a');
    wa.className = 'btn ghost';
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.textContent = decodeHTMLEntities(waText);
    wa.href = `https://wa.me/212663650333?text=${encodeURIComponent(`${carName(car)} \u2013 ${book.textContent}`)}`;
    actions.append(book, wa);

    content.append(title, meta, tags, reserve, actions);

    const badges = document.createElement('div');
    badges.className = 'card-badges';
    const badgeSegment = document.createElement('span');
    badgeSegment.className = 'badge';
    badgeSegment.textContent = segmentLabel(car.segment);
    const badgeGearbox = document.createElement('span');
    badgeGearbox.className = 'badge';
    badgeGearbox.textContent = gearboxLabel(car.gearbox);
    badges.append(badgeSegment, badgeGearbox);

    card.append(img, content, badges);
    return card;
  }

  function createCarCardPretty(car){
    return createCarCard(car);
  }

  const FEATURED_PRIORITIES = [
    'duster-grey-man-diesel',
    'stepway-silver-auto-essence',
    'clio5-black-man-diesel',
    'clio5-blue-man-diesel'
  ];

  let fleetFilters = {segment:'all', gearbox:'Automatique', fuel:'Essence'};
  let fleetInitialized = false;

  async function renderFeatured(){
    const container = $('#featured-cars');
    if(!container) return [];

    const cars = await loadCars();
    const ordered = [];
    const seen = new Set();

    const source = Array.isArray(cars) && cars.length ? cars : FALLBACK_CARS.slice();

    FEATURED_PRIORITIES.forEach(id=>{
      const car = source.find(item=>item.id === id);
      if(car && !seen.has(car.id)){
        ordered.push(car);
        seen.add(car.id);
      }
    });

    source.forEach(car=>{
      if(car && !seen.has(car.id)){
        ordered.push(car);
        seen.add(car.id);
      }
    });

    container.innerHTML = '';
    ordered.forEach(car=>{
      container.appendChild(createCarCard(car));
    });
    ensureCardMediaLoaded(container);
    normalizeCardText(container);
    return ordered;
  }

  function populateFilterSelect(select, values, labelFn){
    if(!select) return;
    const previous = select.value || 'all';
    const unique = Array.from(new Set(values.filter(Boolean))).sort((a,b)=>a.localeCompare(b));
    const frag = document.createDocumentFragment();

    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = currentDict().all || 'All';
    frag.appendChild(allOption);

    unique.forEach(value=>{
      const opt = document.createElement('option');
      opt.value = value;
      opt.textContent = labelFn ? labelFn(value) : value;
      frag.appendChild(opt);
    });

    select.innerHTML = '';
    select.appendChild(frag);
    if(unique.includes(previous)){
      select.value = previous;
    }
  }

  function readFleetFilters(){
    const segmentSelect = $('#filter-seg');
    const gearboxSelect = $('#filter-gear');
    const fuelSelect = $('#filter-fuel');
    return {
      segment: segmentSelect ? segmentSelect.value : 'all',
      gearbox: gearboxSelect ? gearboxSelect.value : 'all',
      fuel: fuelSelect ? fuelSelect.value : 'all'
    };
  }

  function applyFleetFilters(cars, filters){
    if(!Array.isArray(cars) || !cars.length){
      return [];
    }
    return cars.filter(car=>{
      if(filters.segment !== 'all' && car.segment !== filters.segment) return false;
      if(filters.gearbox !== 'all' && car.gearbox !== filters.gearbox) return false;
      if(filters.fuel !== 'all' && car.fuel !== filters.fuel) return false;
      return true;
    });
  }

  async function renderFleet(){
    const grid = $('#fleet-grid');
    if(!grid) return [];

    const cars = await loadCars();

    if(!fleetInitialized){
      populateFilterSelect($('#filter-seg'), cars.map(car=>car.segment), segmentLabel);
      populateFilterSelect($('#filter-gear'), cars.map(car=>car.gearbox), gearboxLabel);
      populateFilterSelect($('#filter-fuel'), cars.map(car=>car.fuel), fuelLabel);
      ['#filter-seg', '#filter-gear', '#filter-fuel'].forEach(selector=>{
        const el = $(selector);
        if(el){
          el.addEventListener('change', ()=>{
            fleetFilters = readFleetFilters();
            renderFleet();
          });
        }
      });
      fleetInitialized = true;
      fleetFilters = readFleetFilters();
    }else{
      fleetFilters = readFleetFilters();
    }

    const filtered = applyFleetFilters(cars, fleetFilters);
    grid.innerHTML = '';

    if(!filtered.length){
      const empty = document.createElement('p');
      empty.className = 'muted';
      empty.textContent = currentDict().no_results || 'Aucun v\u00e9hicule disponible.';
      grid.appendChild(empty);
    }else{
      filtered.forEach(car=>{
        grid.appendChild(createCarCard(car));
      });
    }

    ensureCardMediaLoaded(grid);
    normalizeCardText(grid);
    return filtered;
  }

  function ensureCardMediaLoaded(root=document){
    $$('.card .media', root).forEach(img=>{
      if(img.classList.contains('loaded')) return;
      const markLoaded = ()=>img.classList.add('loaded');
      if(img.complete && img.naturalWidth > 0){
        markLoaded();
      }else{
        img.addEventListener('load', markLoaded, {once:true});
        img.addEventListener('error', markLoaded, {once:true});
      }
    });
  }

  function updateLangToggle(){
    const btn = $('#lang-toggle');
    if(!btn) return;
    const lang = getLang();
    btn.textContent = lang.toUpperCase();
    btn.setAttribute('aria-label', LANG_LABELS[lang] || 'Switch language');
  }

  function normalizeCardText(root=document){
    $$('.card-contact', root).forEach(el=>{
      el.innerHTML = el.innerHTML.replace(/\s*[\u00B7|]+\s*/g, ' \u00B7 ').replace(/\s{2,}/g, ' ');
    });
    $$('.card-actions a', root).forEach(link=>{
      const label = link.getAttribute('aria-label');
      link.textContent = decodeHTMLEntities(link.textContent || '');
      if(label){
        link.setAttribute('aria-label', decodeHTMLEntities(label));
      }
    });
  }

  function updateCookieBannerLang(){
    if(!cookieBar) return;
    const dict = currentDict();
    const message = cookieBar.querySelector('[data-role="cookie-message"]');
    const button = cookieBar.querySelector('button');
    if(message){
      message.textContent = dict.cookie_msg || 'Nous utilisons uniquement des cookies essentiels.';
    }
    if(button){
      button.textContent = dict.cookie_accept || 'J\u2019accepte';
    }
  }

  function initCookieBanner(){
    const storageKey = 'vigicar_cookie_accept';
    if(typeof window === 'undefined' || !window.localStorage) return;
    try{
      if(localStorage.getItem(storageKey)) return;
    }catch{return;}

    cookieBar = document.createElement('aside');
    cookieBar.className = 'cookie-banner';
    cookieBar.innerHTML = `
      <span data-role="cookie-message"></span>
      <div class="actions"><button type="button" class="btn primary"></button></div>
    `;
    document.body.appendChild(cookieBar);
    updateCookieBannerLang();
    const close = cookieBar.querySelector('button');
    if(close){
      close.addEventListener('click', ()=>{
        try{ localStorage.setItem(storageKey, '1'); }catch{}
        cookieBar.remove();
        cookieBar = null;
      });
    }
  }

  function initLogoFallback(){
    $$('img[src$="logo.png"]').forEach(img=>{
      img.addEventListener('error', ()=>{
        if(img.dataset.fallbackTried) return;
        img.dataset.fallbackTried = '1';
        img.src = './img/logo.jpg';
      });
    });
  }

  function highlightActiveNav(){
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    $$(`#primary-nav a[href$=".html"]`).forEach(link=>{
      const href = (link.getAttribute('href') || '').split('/').pop().toLowerCase();
      if(href === current){
        link.setAttribute('aria-current', 'page');
      }else{
        if(link.hasAttribute('aria-current')){
          link.removeAttribute('aria-current');
        }
      }
    });
  }

  function initSlider(){
    const slider = $('#hero-slider');
    if(!slider) return;
    const slides = $$('.slide', slider);
    if(slides.length <= 1) return;
    const controls = slider.querySelector('.controls');
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    let index = slides.findIndex(slide=>slide.classList.contains('active'));
    if(index < 0) index = 0;
    let autoplayTimer = null;

    const updateSlides = ()=>{
      slides.forEach((slide, i)=>{
        slide.classList.toggle('active', i === index);
        slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
      });
      if(controls){
        Array.from(controls.querySelectorAll('button')).forEach((dot, i)=>{
          dot.classList.toggle('active', i === index);
        });
      }
    };

    const scheduleAutoplay = ()=>{
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(()=>goTo(index + 1), 6500);
    };

    const goTo = target=>{
      const total = slides.length;
      index = (target + total) % total;
      updateSlides();
      scheduleAutoplay();
    };

    if(controls && !controls.childElementCount){
      slides.forEach((_, i)=>{
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'dot';
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', ()=>goTo(i));
        controls.appendChild(dot);
      });
    }

    if(prev){
      prev.addEventListener('click', ()=>goTo(index - 1));
    }
    if(next){
      next.addEventListener('click', ()=>goTo(index + 1));
    }

    slider.addEventListener('mouseenter', ()=>clearInterval(autoplayTimer));
    slider.addEventListener('mouseleave', scheduleAutoplay);

    updateSlides();
    scheduleAutoplay();
  }

  function initBooking(){
    const form = document.querySelector('[data-booking-form]');
    if(!form) return;
    // Placeholder for future booking enhancements.
  }

  function setTodayDefaults(){
    const today = new Date();
    const iso = today.toISOString().slice(0, 10);
    $$('input[type="date"]').forEach(input=>{
      if(!input.value){
        input.value = iso;
      }
      if(!input.min){
        input.min = iso;
      }
    });
  }

  function initReveal(){
    const targets = $$('[data-animate]');
    if(!targets.length) return;
    if(!('IntersectionObserver' in window)){
      targets.forEach(target=>target.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.15});
    targets.forEach(target=>observer.observe(target));
  }

  function initLangUI(){
    const btn = $('#lang-toggle');
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      const current = getLang();
      const idx = LANG_ORDER.indexOf(current);
      const next = LANG_ORDER[(idx + 1) % LANG_ORDER.length];
      setLang(next);
      translateElements();
      updateLangToggle();
      document.dispatchEvent(new CustomEvent('vigicar:langchange', {detail:{lang:next}}));
    });
    updateLangToggle();
  }

  function initResponsiveNav(){
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');
    if(!toggle || !nav) return;

    const syncNavState = ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      nav.setAttribute('aria-hidden', expanded ? 'false' : 'true');
      document.body.classList.toggle('nav-open', expanded);
    };

    const openNav = ()=>{
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
      syncNavState();
    };

    const closeNav = ()=>{
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
      syncNavState();
    };

    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if(expanded){
        closeNav();
      }else{
        openNav();
      }
    });

    nav.addEventListener('click', event=>{
      const target = event.target;
      if(target && target.closest('a')){
        closeNav();
      }
    });

    window.addEventListener('resize', ()=>{
      syncNavState();
    });

    document.addEventListener('keydown', event=>{
      if(event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true'){
        closeNav();
        toggle.focus();
      }
    });

    syncNavState();
  }

  function setFooterYear(){
    const yearEl = $('#footer-year');
    if(yearEl){
      yearEl.textContent = `\u00A9 ${new Date().getFullYear()}`;
    }
  }

  async function initQuickWhatsApp(){
    const carSel = document.getElementById('wa-car');
    const daysSel = document.getElementById('wa-days');
    const phoneSel = document.getElementById('wa-phone');
    const sendBtn = document.getElementById('wa-send');
    if(!carSel || !daysSel || !phoneSel || !sendBtn) return;

    try{
      const cars = await loadCars();
      const names = Array.from(new Set(cars.map(c=>carName(c)).filter(Boolean))).sort();
      carSel.innerHTML = '';
      names.forEach(name=>{
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        carSel.appendChild(opt);
      });
      const urlModel = new URLSearchParams(location.search).get('model');
      if(urlModel && carSel.querySelector(`option[value="${urlModel}"]`)){
        carSel.value = urlModel;
      }
    }catch{}

    daysSel.innerHTML = '';
    for(let i=1;i<=30;i++){
      const opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = String(i);
      daysSel.appendChild(opt);
    }

    sendBtn.addEventListener('click', ()=>{
      const car = carSel.value || '';
      const days = daysSel.value || '';
      const phone = phoneSel.value || '212663650333';
      const lang = getLang();
      const tpl = WA_TEMPLATES[lang] || WA_TEMPLATES.fr;
      const lines = [tpl.greeting, tpl.intent];
      const details = [];
      if(car){
        details.push(`${tpl.model} ${car}`);
      }
      if(days){
        const dayLabel = Number(days) > 1 ? tpl.days : tpl.day;
        details.push(`${tpl.duration} ${days} ${dayLabel}`.trim());
      }
      if(details.length){
        lines.push('', ...details);
      }
      lines.push('', tpl.thanks);
      const message = lines.filter(Boolean).join('\\n');
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  }

  document.addEventListener('vigicar:langchange', ()=>{
    renderFeatured();
    renderFleet();
    ensureCardMediaLoaded();
    updateCookieBannerLang();
    normalizeCardText();
  });

  document.addEventListener('DOMContentLoaded', async ()=>{
    translateElements();
    initLangUI();
    initResponsiveNav();
    initLogoFallback();
    highlightActiveNav();
    ensureCardMediaLoaded();
    await Promise.all([renderFeatured(), renderFleet()]);
    ensureCardMediaLoaded();
    initSlider();
    initBooking();
    initCookieBanner();
    setTodayDefaults();
    setFooterYear();
    initQuickWhatsApp();
    ensureCardMediaLoaded();
    document.body.classList.add('js-ready');
    initReveal();
  });
})();



