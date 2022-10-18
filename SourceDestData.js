/**
 *This object is provided to the OnSourceDestChange method, which is called when the source or destination state of a tab changes.
 */
class SourceDestData {
	/**
	 * <p>Returns <strong>True</strong> if the tab is now the destination.
	 *   </p>
	 * @returns {boolean}
	 */

	dest;
	/**
	 * <p>Returns <strong>True</strong> if the tab is now the source. If both
	 *       <strong>source</strong> and <strong>dest</strong> return False it
	 *       indicates that the tab is now "off".</p>
	 * @returns {boolean}
	 */

	source;
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
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link Tab}&nbsp;object representing the
	 *       tab.</p>
	 * @returns {Tab}
	 */

	tab;
} //end class
