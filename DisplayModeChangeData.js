/**
 *This object is provided to the OnDisplayModeChange method, which is called when the display mode changes in a tab.
 */
class DisplayModeChangeData {
	/**
	 * <p>Returns a <em>string </em>indicating the new display mode. Will be one
	 *       of <em>largeicons</em>, <em>smallicons</em>, <em>list</em>,
	 *       <em>details</em>, <em>power</em>, <em>thumbnails</em> or
	 *       <em>tiles</em>.</p>
	 * @returns {string}
	 */

	mode;
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
	 *       the display mode changed in.</p>
	 * @returns {Tab}
	 */

	tab;
} //end class
