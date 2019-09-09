/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

import * as React from 'react';
import {Context} from './injectIntl';
import {MessageDescriptor} from '../types';
const shallowEquals = require('shallow-equal/objects');

import {formatMessage as baseFormatMessage} from '../format';
import {
  invariantIntlContext,
  DEFAULT_INTL_CONFIG,
  createFormatters,
} from '../utils';
import {PrimitiveType, FormatXMLElementFn} from 'intl-messageformat';

const defaultFormatMessage = (
  descriptor: MessageDescriptor,
  values?: Record<
    string,
    PrimitiveType | React.ReactElement | FormatXMLElementFn
  >
) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(
      '[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry. Using default message as fallback.'
    );
  }

  let messages : any = {"en":
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
  "reviewPlural":"{count, plural, =0 {Reviews} one {Review} other {Reviews}}",
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
  "teaspoonFraction":"teaspoon",
  "tablespoonFraction":"tablespoon",
  "ounceFraction":"ounce",
  "cupFraction":"cup",
  "pintFraction":"pint",
  "quartFraction":"quart",
  "gallonFraction":"gallon",
  "poundFraction":"pound",
  "inchFraction":"inch",
  "splashFraction":"splash",
  "bunchFraction":"bunch",
  "pinchFraction":"pinch",
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
  "haveAnAccount": "tengo una count",
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
  "reviewPlural":"{count, plural, = 0 {Reviews} one {Review} other {Reviews}}",
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
  "writeAReview": "Escribe una reseña",
  "yourAddress": "Su dirección",
  "yourInformation": "Tu información",
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
  "ounce":"{count, plural, =0 {onza} one {onza} other {onzas}}",
  "cup":"{count, plural, =0 {vaso} one {vaso} other {vasos}}",
  "pint":"{count, plural, =0 {pinta} one {pinta} other {pintas}}",
  "quart":"{count, plural, =0 {cuarto} one {cuarto} other {cuarto}}",
  "gallon":"{count, plural, =0 {galón} one {galón} other {galón}}",
  "pound":"{count, plural, =0 {libra} one {libra} other {libras}}",
  "inch":"{count, plural, =0 {inch} one {inch} other {inches}}",
  "wholePlural":"{count, plural, =0 {entero} one {entero} other {entero}}",
  "splash":"{count, plural, =0 {splash} one {splash} other {salpicaduras}}",
  "bunch":"{count, plural, =0 {manojo} one {manojo} other {manojos}}",
  "pinch":"{count, plural, =0 {pinch} one {pinch} other {pinches}}",
  "teaspoonFraction":"cucharadita",
  "tablespoonFraction":"cucharada",
  "ounceFraction":"onza",
  "cupFraction":"vaso",
  "pintFraction":"pinta",
  "quartFraction":"cuarto",
  "gallonFraction":"galón",
  "poundFraction":"libra",
  "inchFraction":"inch",
  "splashFraction":"splash",
  "bunchFraction":"manojo",
  "pinchFraction":"pinch",
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
    "teaspoon": '{count, plural, =0 {cuillère à thé} one {cuillère à thé} other {cuillères à café}}',
    "tablespoon": '{count, plural, =0 {cuillère à soupe} une {cuillère à soupe} other {cuillères à soupe}}',
    "ounce": '{count, plural, =0 {once} one {once} other {onces}}',
    "cup": '{count, plural, =0 {tasse} une {tasse} other {tasses}}',
    "pint": '{count, plural, =0 {pint} one {pint} other {pints}}',
    "quart": '{count, plural, =0 {quart} one {quart} other {quarts}}',
    "gallon": '{count, plural, =0 {gallon} one {gallon} other {gallons}}',
    "pound": '{count, plural, =0 {livre} one {livre} other {livres}}',
    "inch": '{count, plural, =0 {pouce} one {pouce} other {pouces}}',
    "wholePlural": '{count, plural, =0 {entier} one {entier} other {entier}}',
    "splash": '{count, plural, =0 {splash} one {splash} other {splash}}',
    "bunch": '{count, plural, =0 {groupe} one {groupe} other {paquets}}',
    "pinch": '{count, plural, =0 {pincer} one {pincer} other {pincer}}',
    "teaspoonFraction": 'cuillère à café',
    "tablespoonFraction": 'cuillerée à soupe',
    "ounceFraction": 'once',
    "cupFraction": 'tasse',
    "pintFraction": 'pinte',
    "quartFraction": 'litre',
    "gallonFraction": 'gallon',
    "poundFraction": 'livre',
    "inchFraction": 'pouce',
    "splashFraction": 'éclaboussure',
    "bunchFraction": 'bouquet',
    "pinchFraction": 'pincer',
    "errorFlash": 'Une erreur est survenue'
  }
  }
  let locale = navigator.language.split("-")[0];
  let config  =  {
    ...DEFAULT_INTL_CONFIG,
    messages: messages[locale],
    locale: locale,
  };

  return baseFormatMessage(
    config,
    createFormatters(),
    descriptor,
    values as any
  );
};

export interface Props<
  V extends Record<string, any> = Record<string, React.ReactNode>
> extends MessageDescriptor {
  values?: V;
  tagName?: React.ElementType<any>;
  children?(...nodes: React.ReactNodeArray): React.ReactNode;
}

export default class FormattedMessage<
  V extends Record<string, any> = Record<
    string,
    PrimitiveType | React.ReactElement | FormatXMLElementFn
  >
> extends React.Component<Props<V>> {
  static defaultProps = {
    values: {},
  };
  static displayName = 'FormattedMessage';
  static contextType = Context;
  context!: React.ContextType<typeof Context>;

  constructor(props: Props<V>, context: React.ContextType<typeof Context>) {
    super(props);
    if (!props.defaultMessage) {
      invariantIntlContext(context);
    }
  }

  shouldComponentUpdate(nextProps: Props<V>) {
    const {values, ...otherProps} = this.props;
    const {values: nextValues, ...nextOtherProps} = nextProps;
    return (
      !shallowEquals(nextValues, values) ||
      !shallowEquals(otherProps, nextOtherProps)
    );
  }

  render() {
    const {
      formatMessage = defaultFormatMessage,
      textComponent: Text = React.Fragment,
    } = this.context || {};
    const {
      id,
      description,
      defaultMessage,
      values,
      children,
      tagName: Component = Text,
    } = this.props;

    const descriptor = {id, description, defaultMessage};
    let nodes: string | React.ReactNodeArray = formatMessage(
      descriptor,
      values
    );

    if (!Array.isArray(nodes)) {
      nodes = [nodes];
    }

    if (typeof children === 'function') {
      return children(...nodes);
    }

    if (Component) {
      // Needs to use `createElement()` instead of JSX, otherwise React will
      // warn about a missing `key` prop with rich-text message formatting.
      return React.createElement(Component, null, ...nodes);
    }
    return nodes;
  }
}
