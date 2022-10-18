/**
 *This object is provided to the OnAfterFolderChange method, which is called after a new folder has been read.
 */
class AfterFolderChangeData {
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
	 * <p><em>If the read failed</em>, this will return a {@link Path}object representing the path
	 *       that Opus tried to read.</p>
	 *       <p><em>If the read was successful, this property is not provided</em> -
	 *       instead, the <strong>tab</strong> property provides access to this
	 *       information.</p>
	 *       <p>Use the <strong>result</strong> property to know if the read was a
	 *       success.</p>
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
	 * <p>Returns <strong>True</strong> if the folder was read successfully, or
	 *       <strong>False</strong> on failure.</p>
	 * @returns {boolean}
	 */

	result;
	/**
	 * <p>Returns a  {@link Tab}&nbsp;object representing the tab
	 *       that read the folder.</p>
	 * @returns {Tab}
	 */

	tab;
} //end class
