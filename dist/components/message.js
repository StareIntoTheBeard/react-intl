"use strict";
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i =0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var injectIntl_1 = require("./injectIntl");
var shallowEquals = require('shallow-equal/objects');
var format_1 = require("../format");
var utils_1 = require("../utils");
var messages = {"en":
{"addToCart": "Add To Cart",
"addedToMyRecipes": "Added to My Recipes!",
"addToMyRecipes": "Add to My Recipes",
"beTheFirstReview": "Be the first to leave a review",
"buyNow": "Buy Now",
"cart": "Cart",
"categories": "Categories",
"characters": "characters",
"cheer": "Hip Hip Hooray!",
"commentsPlaceholder": "Use this space to make any notes you have for this recipe. These notes are personal and will only be visible to you.",
"continueShopping": "Continue Shopping",
"cookTime": "Cook time",
"deliverInbox": "Get delicious, quick-and-easy recipes, and inspiration delivered to your inbox.",
"dismiss": "Dismiss",
"dismissAlert": "Dismiss alert",
"draft": "Draft",
"editComment": "Edit comment",
"enter": "Enter",
"enterEmail": "Enter your email address",
"fileDetected": "file was detected for upload",
"firstName": "First Name",
"format": "Format",
"haveAnAccount": "I have an account",
"haveBeenAdded": "You've been added to our list and should hear from us soon.",
"imageDimensions": "Image must be at least",
"imageFor": "Image for",
"imageOf": "Image of",
"imageOfYou": "Image of You",
"ingredients": "Ingredients",
"invalidFile": "not a valid file",
"joinCommunity": "Congratulations on successfully joining the Mealthy Community and welcome to the family!",
"lastName": "Last Name",
"leaveAComment": "Leave a comment",
"lookingMoreContent": "Looking for more content like this? Just leave us your email below. No spam—unless called for in the recipe.",
"mealthyCommunity": "The Mealthy community is free to join!",
"model": "Model",
"neverSkipMeal": "Never skip a meal",
"newToMealthy": "I'm new to Mealthy",
"noAcceptable": "No acceptable",
"noMeat": "Yes, please don't show me recipes with meat",
"noRecipesAdded": "No recipes have been added to My Recipes. Get started by exploring one of our categories!",
"noRecipesFound": "No recipes found matching",
"password": "Password",
"phoneNumber": "Phone Number",
"prepTime": "Prep time",
"published": "Published",
"readyIn": "Ready in",
"recipe": "recipe",
"recipeMe": "Recipe Me",
"removedFromMyRecipes": "Removed from My Recipes",
"removeFromMyRecipes": "Remove from My Recipes",
"reviewPlural":"'{count, plural, =0 {Reviews} one {Review} other {Reviews}}",
"scheduled": "Scheduled",
"selectProduct": "Select your product",
"serialNumber": "Serial Number",
"servings": "Servings",
"shippingApplied": "Shipping and discount codes are added at checkout.",
"signUp": "Signup",
"signUpToday": "Sign up today to access thousands of recipes, videos, articles, and more.",
"startTyping": "Start typing to search",
"submitComment": "Submit comment",
"submitReview": "Submit review",
"subscribe": "Subscribe",
"subtotal": "Subtotal",
"tellUsWhatYouLiked": "Tell us what you liked about it. Did you try something different?",
"thankYou": "Thank you",
"toLeaveReview": "to leave a review.",
"tryAgain": "We're sorry, but there was an error. Check your email and try again?",
"updatedComment": "Successfully updated your comment.",
"upload": "Upload",
"uploading": "Uploading",
"username": "Username",
"vegetarian": "Are you a vegetarian",
"viewAll": "View All",
"whole": "whole",
"writeAReview": "Write a review",
"yourAddress": "Your Address",
"yourInformation": "Your Information",
"emailField": "Enter email",
"firstNameField": "Enter First Name",
"lastNameField": "Enter Last Name",
"passwordField": "Enter password",
"phoneNumberField": "Enter phone number",
"profileImageComponent": "Image of You",
"reviewField": "Tell us what you liked about it. Did you try something different?",
"searchMyRecipesField": "Search My Recipes",
"serialNumberField": "Enter serial number",
"userRecipeCommentsField": "Use this space to make any notes you have for this recipe. These notes are personal and will only be visible to you.",
"usernameField": "Enter username",
"teaspoon":"{count, plural, =0 {teaspoon} one {teaspoon} other {teaspoons}}",
"tablespoon":"{count, plural, =0 {tablespoon} one {tablespoon} other {tablespoons}}",
"ounce":"{count, plural, =0 {ounce} one {ounce} other {ounces}}",
"cup":"{count, plural, =0 {cup} one {cup} other {cups}}",
"pint":"{count, plural, =0 {pint} one {pint} other {pints}}",
"quart":"{count, plural, =0 {quart} one {quart} other {quarts}}",
"gallon":"{count, plural, =0 {gallon} one {gallon} other {gallons}}",
"pound":"{count, plural, =0 {pound} one {pound} other {pounds}}",
"inch":"{count, plural, =0 {inch} one {inch} other {inches}}",
"wholePlural":"{count, plural, =0 {whole} one {whole} other {whole}}",
"splash":"{count, plural, =0 {splash} one {splash} other {splashes}}",
"bunch":"{count, plural, =0 {bunch} one {bunch} other {bunches}}",
"pinch":"{count, plural, =0 {pinch} one {pinch} other {pinches}}",
"gram":"{count, plural, =0 {gram} one {gram} other {grams}}",
"kilogram":"{count, plural, =0 {kilogram} one {kilogram} other {kilograms}}",
"milliliter":"{count, plural, =0 {milliliter} one {milliliter} other {milliliters}}",
"liter":"{count, plural, =0 {liter} one {liter} other {liters}}",
"teaspoonFraction":"teaspoon",
"tablespoonFraction":"tablespoon",
"ounceFraction":"ounce",
"cupFraction":"cup",
"pintFraction":"pint",
"quartFraction":"quart",
"gallonFraction":"gallon",
"poundFraction":"pound",
"inchFraction":"inch",
"wholeFraction":"whole",
"splashFraction":"splash",
"bunchFraction":"bunch",
"pinchFraction":"pinch",
"gramFraction":"gram",
"kilogramFraction":"kilogram",
"milliliterFraction":"milliliter",
"literFraction":"liter",
"errorFlash": "An error occurred."},
"es":
{"addToCart": "Añadir a la cesta",
"addedToMyRecipes": "Añadido a mis recetas!",
"addToMyRecipes": "Agregar a mis recetas",
"beTheFirstReview": "Se el primero en dejar un comentario",
"buyNow": "Compra ahora",
"cart": "Carro",
"categories": "Categorias",
"characters": "caracteres",
"cheer": "¡Hip hip hurra!",
"commentsPlaceholder": "Use este espacio para tomar notas que tenga para esta receta. Estas notas son personales y solo serán visibles para usted.",
"continueShopping": "Seguir comprando",
"cookTime": "hora de cocinar",
"deliverInbox": "Obtenga recetas deliciosas, rápidas y fáciles, e inspiración en su bandeja de entrada.",
"dismiss": "Despedir",
"dismissAlert": "Descartar alerta",
"draft": "Borrador",
"editComment": "Editar comentario",
"enter": "Entrar",
"enterEmail": "Ingrese su dirección de correo electrónico",
"fileDetected": "archivo detectado para cargar",
"firstName": "Primer nombre",
"format": "Formato",
"haveAnAccount": "tengo una cuenta",
"haveBeenAdded": "Usted ha sido agregado a nuestra lista y debería tener noticias nuestras pronto.",
"imageDimensions": "La imagen debe ser al menos",
"imageFor": "Imagen para",
"imageOf": "Imagen de",
"imageOfYou": "Imagen de usted",
"ingredients": "Ingredientes",
"invalidFile": "no es un archivo valido",
"joinCommunity": "¡Felicitaciones por unirse exitosamente a la Comunidad Mealthy y bienvenido a la familia!",
"lastName": "Apellido",
"leaveAComment": "Deja un comentario",
"lookingMoreContent": "¿Buscas más contenido como este? Solo déjanos tu correo electrónico a continuación. Sin spam, a menos que se indique en la receta.",
"mealthyCommunity": "¡La comunidad de Mealthy es libre de unirse!",
"model": "Modelo",
"neverSkipMeal": "Nunca te saltes una comida",
"newToMealthy": "Soy nuevo en Mealthy",
"noAcceptable": "No aceptable",
"noMeat": "Sí, por favor no me muestres recetas con carne.",
"noRecipesAdded": "No se han agregado recetas a Mis recetas. ¡Comience explorando una de nuestras categorías!",
"noRecipesFound": "No se encontraron recetas que coincidan",
"password": "Contraseña",
"phoneNumber": "Número de teléfono",
"prepTime": "Tiempo de preparación",
"published": "Publicado",
"readyIn": "Listo en",
"recipe": "receta",
"recipeMe": "Me receta",
"removedFromMyRecipes": "Eliminado de mis recetas",
"removeFromMyRecipes": "Eliminar de mis recetas",
"reviewPlural":"'{count, plural, =0 {Reviews} one {Review} other {Reviews}}",
"scheduled": "Programado",
"selectProduct": "Selecciona tu producto",
"serialNumber": "Número de serie",
"servings": "Porciones",
"shippingApplied": "Los códigos de envío y descuento se agregan al finalizar la compra.",
"signUp": "Regístrate",
"signUpToday": "Regístrese hoy para acceder a miles de recetas, videos, artículos y más.",
"startTyping": "Comience a escribir para buscar",
"submitComment": "Enviar comentario",
"submitReview": "Enviar opinión",
"subscribe": "Suscribir",
"subtotal": "Total parcial",
"tellUsWhatYouLiked": "Cuéntanos qué te gustó al respecto. ¿Intentaste algo diferente?",
"thankYou": "Gracias",
"toLeaveReview": "para dejar un comentario",
"tryAgain": "Lo sentimos, pero hubo un error. Revise su correo electrónico e intente nuevamente?",
"updatedComment": "Actualizó con éxito su comentario.",
"upload": "Subir",
"uploading": "Cargando",
"username": "Nombre de usuario",
"vegetarian": "Eres vegetariano",
"viewAll": "Ver todo",
"whole": "todo",
"yourAddress": "Su dirección",
"yourInformation": "Tu información",
"writeAReview": "Escribe una reseña",
"emailField": "Ingrese correo electrónico",
"firstNameField": "Ingrese el nombre",
"lastNameField": "Introduzca el apellido",
"passwordField": "Introducir la contraseña",
"phoneNumberField": "Ingresa número telefónico",
"profileImageComponent": "Imagen de usted",
"reviewField": "Cuéntanos qué te gustó al respecto. ¿Intentaste algo diferente?",
"searchMyRecipesField": "Buscar mis recetas",
"serialNumberField": "Ingrese número de serie",
"userRecipeCommentsField": "Use este espacio para tomar notas que tenga para esta receta. Estas notas son personales y solo serán visibles para usted.",
"usernameField": "Introduzca su nombre de usuario",
"teaspoon":"{count, plural, =0 {cucharadita} one {cucharadita} other {cucharaditas}}",
"tablespoon":"{count, plural, =0 {cucharada} one {cucharada} other {cucharadas}}",
"cup":"{count, plural, =0 {taza} one {taza} other {tazas}}",
"pint":"{count, plural, =0 {pinta} one {pinta} other {pintas}}",
"quart":"{count, plural, =0 {cuarto de galón} one {cuarto de galón} other {cuarto de galóns}}",
"gallon":"{count, plural, =0 {galón} one {galón} other {galón}}",
"ounce":"{count, plural, =0 {onza} one {onza} other {onzas}}",
"pound":"{count, plural, =0 {libra} one {libra} other {libras}}",
"inch":"{count, plural, =0 {pulgada} one {pulgada} other {pulgadas}}",
"wholePlural":"{count, plural, =0 {entero} one {entero} other {entero}}",
"splash":"{count, plural, =0 {poquito} one {poquito} other {poquitos}}",
"bunch":"{count, plural, =0 {manojo} one {manojo} other {manojos}}",
"pinch":"{count, plural, =0 {pizca} one {pizca} other {pizcas}}",
"gram":"{count, plural, =0 {gramo} one {gramo} other {gramos}}",
"kilogram":"{count, plural, =0 {kilogramo} one {kilogramo} other {kilogramos}}",
"milliliter":"{count, plural, =0 {mililitro} one {mililitro} other {mililitros}}",
"liter":"{count, plural, =0 {litro} one {litro} other {litros}}",
"teaspoonFraction":"cucharadita",
"tablespoonFraction":"cucharada",
"ounceFraction":"onza",
"cupFraction":"taza",
"pintFraction":"pinta",
"quartFraction":"cuarto de galón",
"gallonFraction":"galón",
"poundFraction":"libra",
"inchFraction":"pulgada",
"wholeFraction":"entero",
"splashFraction":"poquito",
"bunchFraction":"manojo",
"pinchFraction":"pizca",
"gramFraction":"gramo",
"kilogramFraction":"kilogramo",
"milliliterFraction":"mililitro",
"literFraction":"litro",
"errorFlash": "Ocurrió un error."},
"fr": {
"addToCart": 'Ajouter au panier',
"addedToMyRecipes": 'Ajouté à mes recettes!',
"addToMyRecipes": 'Ajouter à mes recettes',
"beTheFirstReview": 'Soyez le premier à laisser un commentaire',
"buyNow": 'Acheter maintenant',
"cart": 'Chariot',
"categories": 'Catégoris',
"characters": 'personnages',
"cheer": 'Hip Hip Hourra!',
"commentsPlaceholder": 'Utilisez cet espace pour prendre des notes pour cette recette. Ces notes sont personnelles et ne seront visibles que par vous.',
"continueShopping": 'Continuer vos achats',
"cookTime": 'Temps de cuisson',
"deliverInbox": "Obtenez de délicieuses recettes rapides et faciles et de l'inspiration livrée dans votre boîte de réception.",
"dismiss": 'Rejeter',
"dismissAlert": "Rejeter l'alerte",
"draft": 'Brouillon',
"editComment": 'Modifier le commentaire',
"enter": 'Entrer',
"enterEmail": 'Entrez votre adresse email',
"fileDetected": 'le fichier a été détecté pour le téléchargement',
"firstName": 'Prénom',
"format": 'Format',
"haveAnAccount": "J'ai un compte",
"haveBeenAdded": 'Vous avez été ajouté à notre liste et vous devriez avoir de nos nouvelles bientôt.',
"imageDimensions": "L'image doit être au moins",
"imageFor": 'Image pour',
"imageOf": 'Image de',
"imageOfYou": 'Image de toi',
"ingredients": 'Ingrédients',
"invalidFile": 'pas un fichier valide',
"joinCommunity": 'Félicitations pour votre participation à la communauté Mealthy et bienvenue dans la famille!',
"lastName": 'Nom de famille',
"leaveAComment": 'Laissez un commentaire',
"lookingMoreContent": 'Vous cherchez plus de contenu comme celui-ci? Laissez-nous votre email ci-dessous. Pas de spam - sauf si demandé dans la recette.',
"mealthyCommunity": "La communauté Mealthy est libre d'adhérer!",
"model": 'Modèle',
"neverSkipMeal": 'Ne sautez jamais un repas',
"newToMealthy": 'Je suis nouveau sur Mealthy',
"noAcceptable": 'Non acceptable',
"noMeat": "Oui, s'il vous plaît, ne me montrez pas de recettes avec de la viande",
"noRecipesAdded": "Aucune recette n'a été ajoutée à Mes recettes. Commencez par explorer l'une de nos catégories!",
"noRecipesFound": 'Aucune recette trouvée',
"password": 'Mot de passe',
"phoneNumber": 'Numéro de téléphone',
"prepTime": 'Temps de préparation',
"published": 'Publié',
"readyIn": 'Ready in',
"recipe": 'recette',
"recipeMe": 'Recette moi',
"removedFromMyRecipes": 'Retiré de mes recettes',
"removeFromMyRecipes": 'Retirer de mes recettes',
"reviewPlural": "'{nombre, pluriel, =0 {Avis} one {Examen} other {Avis}}",
"scheduled": 'Prévu',
"selectProduct": 'Sélectionnez votre produit',
"serialNumber": 'Numéro de série',
"servings": 'Portions',
"shippingApplied": "Les codes d'expédition et de réduction sont ajoutés à la caisse.",
"signUp": "S'inscrire",
"signUpToday": "Inscrivez-vous aujourd'hui pour accéder à des milliers de recettes, vidéos, articles et plus.",
"startTyping": 'Commencez à taper pour rechercher',
"submitComment": 'Envoyer un commentaire',
"submitReview": 'Poster le commentaire',
"subscribe": 'Souscrire',
"subtotal": 'Total',
"tellUsWhatYouLiked": 'Dis-nous ce que tu as aimé. Avez-vous essayé quelque chose de différent?',
"thankYou": 'Je vous remercie',
"toLeaveReview": 'laisser une critique.',
"tryAgain": 'Nous sommes désolés, mais il y a eu une erreur. Vérifiez votre email et essayez à nouveau?',
"updatedComment": 'Mis à jour avec succès votre commentaire.',
"upload": 'Télécharger',
"uploading": 'Téléchargement',
"username": "Nom d'utilisateur",
"vegetarian": 'Êtes-vous végétarien',
"viewAll": 'Voir tout',
"whole": 'entier',
"writeAReview": 'Écrire une critique',
"yourAddress": 'Votre adresse',
"yourInformation": 'Vos informations',
"emailField": 'Entrez email',
"firstNameField": 'Entrez votre prénom',
"lastNameField": 'Entrer le nom de famille',
"passwordField": 'Entrer le mot de passe',
"phoneNumberField": 'Entrez le numéro de téléphone',
"profileImageComponent": 'Image de toi',
"reviewField": 'Dis-nous ce que tu as aimé. Avez-vous essayé quelque chose de différent?',
"searchMyRecipesField": 'Rechercher dans mes recettes',
"serialNumberField": 'Entrer le numéro de série',
"userRecipeCommentsField": 'Utilisez cet espace pour prendre des notes pour cette recette. Ces notes sont personnelles et ne seront visibles que par vous.',
"usernameField": "Saisissez votre nom d'utilisateur",
"teaspoon": '{count, plural, =0 {cuillère à thé} one {cuillère à thé} other {cuillères à thé}}',
"tablespoon": '{count, plural, =0 {cuillère à soupe} une {cuillère à soupe} other {cuillères à soupe}}',
"ounce": '{count, plural, =0 {once} one {once} other {onces}}',
"cup": '{count, plural, =0 {tasse} une {tasse} other {tasses}}',
"pint": '{count, plural, =0 {demi-litre} one {demi-litre} other {demi-litres}}',
"quart": '{count, plural, =0 {litre} one {litre} other {litres}}',
"gallon": '{count, plural, =0 {gallon} one {gallon} other {gallons}}',
"pound": '{count, plural, =0 {livre} one {livre} other {livres}}',
"inch": '{count, plural, =0 {pouce} one {pouce} other {pouces}}',
"wholePlural": '{count, plural, =0 {tout} one {tout} other {tout}}',
"splash": '{count, plural, =0 {touche de} one {touche de} other {touches de}}',
"bunch": '{count, plural, =0 {bouquet} one {bouquet} other {bouquets}}',
"pinch": '{count, plural, =0 {pincée de} one {pincée de} other {pincées de}}',
"gram": '{count, plural, =0 {gramme} one {gramme} other {grammes}}',
"kilogram": '{count, plural, =0 {kilogramme} one {kilogramme} other {kilogrammes}}',
"milliliter": '{count, plural, =0 {millilitre} one {millilitre} other {millilitres}}',
"liter": '{count, plural, =0 {litre} one {litre} other {litres}}',
"teaspoonFraction": 'cuillère à café',
"tablespoonFraction": 'cuillerée à soupe',
"ounceFraction": 'once',
"cupFraction": 'tasse',
"pintFraction": 'demi-litre',
"quartFraction": 'litre',
"gallonFraction": 'gallon',
"poundFraction": 'livre',
"inchFraction": 'pouce',
"wholeFraction": 'tout',
"splashFraction": 'touche de',
"bunchFraction": 'bouquet',
"pinchFraction": 'pincée de',
"gramFraction": 'gramme',
"kilogramFraction": 'kilogramme',
"milliliterFraction": 'millilitre',
"literFraction": 'litre',
"errorFlash": 'Une erreur est survenue'
}
};

var defaultFormatMessage = function (descriptor, values) {
    var locale = navigator.language.split("-")[0];
    var config = Object.assign({}, utils_1.DEFAULT_INTL_CONFIG);
    config = Object.assign(config, {
        messages: messages[locale],
        locale: locale,
    });


    if ('development' !== 'production') {
        console.error('[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry. Using default message as fallback.');
    }
    return format_1.formatMessage(config, utils_1.createFormatters(), descriptor, values);
};
var FormattedMessage = /** @class */ (function (_super) {
    __extends(FormattedMessage, _super);
    function FormattedMessage(props, context) {
        var _this = _super.call(this, props) || this;
        if (!props.defaultMessage) {
            utils_1.invariantIntlContext(context);
        }
        return _this;
    }
    FormattedMessage.prototype.shouldComponentUpdate = function (nextProps) {
        var _a = this.props, values = _a.values, otherProps = __rest(_a, ["values"]);
        var nextValues = nextProps.values, nextOtherProps = __rest(nextProps, ["values"]);
        return (!shallowEquals(nextValues, values) ||
            !shallowEquals(otherProps, nextOtherProps));
    };
    FormattedMessage.prototype.render = function () {
        var _a = this.context || {}, _b = _a.formatMessage, formatMessage = _b === void 0 ? defaultFormatMessage : _b, _c = _a.textComponent, Text = _c === void 0 ? React.Fragment : _c;
        var _d = this.props, id = _d.id, description = _d.description, defaultMessage = _d.defaultMessage, values = _d.values, children = _d.children, _e = _d.tagName, Component = _e === void 0 ? Text : _e;
        var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
        var nodes = formatMessage(descriptor, values);
        if (!Array.isArray(nodes)) {
            nodes = [nodes];
        }
        if (typeof children === 'function') {
            return children.apply(void 0, nodes);
        }
        if (Component) {
            // Needs to use `createElement()` instead of JSX, otherwise React will
            // warn about a missing `key` prop with rich-text message formatting.
            return React.createElement.apply(React, [Component, null].concat(nodes));
        }
        return nodes;
    };
    FormattedMessage.defaultProps = {
        values: {},
    };
    FormattedMessage.displayName = 'FormattedMessage';
    FormattedMessage.contextType = injectIntl_1.Context;
    return FormattedMessage;
}(React.Component));
exports.default = FormattedMessage;
