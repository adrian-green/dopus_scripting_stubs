/**
 *This object is provided to the OnOpenTab method, which is called when a new tab is opened.
 */
class OpenTabData {
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
	 * <p>Returns a  {@link Tab}&nbsp;object representing the newly
	 *       opened tab.</p>
	 * @returns {Tab}
	 */

	tab;
} //end class
