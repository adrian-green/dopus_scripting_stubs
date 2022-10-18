/**
 *This object is provided to the OnStyleSelected method, which is called when a new style is chosen in a Lister.
 */
class StyleSelectedData {
	/**
	 * <p>Returns a  {@link Lister}&nbsp;object representing the
	 *       Lister that changing style.</p>
	 * @returns {Lister}
	 */

	lister;
	/**
	 * <p>Returns a string indicating any qualifier keys that were held down by
	 *       the user when the event was triggered.</p>
	 *       <p>The string can contain any or all of the following: <em>shift</em>
	 *       <em>ctrl</em>, <em>alt</em>, <em>lwin</em>, <em>rwin</em></p>
	 *       <p>If no qualifiers were down, the string will be: <em>none</em></p>
	 * @returns {string}
	 */

	qualifiers;
	/**
	 * <p>Returns the name of the newly selected style.</p>
	 * @returns {string}
	 */

	style;
} //end class
