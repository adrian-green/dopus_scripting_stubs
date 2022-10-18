/**
 *This object is provided to the OnTabClick event, which is called whenever a tab is clicked with a qualifier key held down.
 */
class TabClickData {
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
	 * <p>Returns a  {@link Tab}&nbsp;object representing the tab
	 *       that was clicked.</p>
	 * @returns {Tab}
	 */

	tab;
} //end class
