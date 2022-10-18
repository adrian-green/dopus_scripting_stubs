/**
 *The ScriptStrings object is returned by the DOpus.strings property. It lets you access any strings defined via string resources.
 */
class ScriptStrings {
	/**
	 * <p>Returns a  {@link Vector}&nbsp;of strings representing
	 *       the languages that strings have been defined for.<br></p>
	 *       <p>&nbsp;</p>
	 * @returns {Vector}
	 */

	langs;
	/**
	 * <p>Returns the text of a string specified by name. The name must match the
	 *       name used in the string resources.<br>&nbsp;</p>
	 *       <p>Optionally you can provide a language name as the second parameter, to
	 *       retrieve a string from a particular language. Otherwise, the string is
	 *       returned in the current language.</p>
	 * @param {string} name
	 * @param {string} language
	 * @returns {string}
	 */
	Get(name, language){}
	/**
	 * <p>Returns <strong>True</strong> if strings in the specified language are
	 *       defined in the resources.</p>
	 * @param {string} language
	 * @returns {boolean}
	 */
	HasLanguage(language){}
} //end class
