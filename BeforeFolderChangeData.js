/**
 *This object is provided to the OnBeforeFolderChange method, which is called before a new folder is read.
 */
class BeforeFolderChangeData {
	/**
	 * <p>Returns a string indicating the action that triggered the folder read.
	 *       The string will be one of the following: <em>normal</em>,
	 *       <em>refresh</em>, <em>refreshsub</em>, <em>parent</em>, <em>root</em>,
	 *       <em>back</em>, <em>forward</em>, <em>dblclk</em>.<br></p>
	 *       <p>The <em>refreshsub</em> actions means the folder (and sub-folders) are
	 *       being refreshed while Flat View is on. The other action names should be
	 *       self-explanatory.</p>
	 * @returns {string}
	 */

	action;
	/**
	 * <p>Returns <strong>True</strong> if this is the first path to be read into
	 *       this tab (i.e. previously the tab was empty).</p>
	 * @returns {boolean}
	 */

	initial;
	/**
	 * <p>Returns a  {@link Path}&nbsp;object representing the new
	 *       path that is to be read.</p>
	 * @returns {Path}
	 */

	path;
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
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link Tab}&nbsp;object representing the tab
	 *       that is changing folder.</p>
	 * @returns {Tab}
	 */

	tab;
} //end class
