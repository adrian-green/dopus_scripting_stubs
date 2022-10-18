/**
 *This object is provided to the OnListerUIChange method, which is called when various user interface elements (tree, viewer, etc) are open or closed in a Lister.
 */
class ListerUIChangeData {
	/**
	 * <p>Returns a <em>string</em> indicating which UI elements changed. This
	 *       will contain one or more of the following strings: <em>dual</em>,
	 *       <em>tree</em>, <em>metapane</em>, <em>viewer</em>, <em>utility</em>,
	 *       <em>duallayout</em>, <em>metapanelayout</em>, <em>viewerlayout</em>,
	 *       <em>toolbars</em>, <em>toolbarset</em>, <em>toolbarsauto</em>,
	 *       <em>minmax.</em></p>
	 * @returns {string}
	 */

	change;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link Lister}&nbsp;object representing the
	 *       Lister that is changing.</p>
	 * @returns {Lister}
	 */

	lister;
	/**
	 * <p>Returns a string indicating any qualifier keys that were held down by
	 *       the user when the event was triggered.</p>
	 *       <p>The string can contain any or all of the following: <em>shift</em>
	 *       <em>ctrl</em>, <em>alt</em>, <em>lwin</em>, <em>rwin</em></p>
	 *       <p>If no qualifiers were down, the string will be:
	 *   <em>none</em></p>
	 * @returns {string}
	 */

	qualifiers;
} //end class
