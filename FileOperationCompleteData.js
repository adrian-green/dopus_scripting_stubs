/**
 *This object is provided to the OnFileOperationComplete method, which lets you receive notification when certain file operations complete.
 */
class FileOperationCompleteData {
	/**
	 * <p>Returns a string that indicates the type of file operation. Currently
	 *       the only supported value is <strong>"rename"</strong>.</p>
	 * @returns {string}
	 */

	action;
	/**
	 * <p>Returns a string that provides the entire command line that launched
	 *       this operation. <!--?xml:namespace prefix = "c1" /--></p>
	 * @returns {string}
	 */

	cmdline;
	/**
	 * <p>When the <strong>query</strong> property is <strong>False</strong> this
	 *       provides further information about the operation that
	 *       completed.<br>&nbsp;</p>
	 *       <p>For "rename" this returns a {@link Map}
	 *       object that provides a map of all items that were renamed and their new
	 *       names.</p>
	 * @returns {*}
	 */

	data;
	/**
	 * <p>Returns a  {@link Path}&nbsp;object representing the
	 *       destination path of the operation.&nbsp;</p>
	 * @returns {Path}
	 */

	dest;
	/**
	 * <p>Returns a string indicating any qualifier keys that were held down by
	 *       the user when the operation was initiated.</p>
	 *       <p>The string can contain any or all of the following: <em>shift</em>
	 *       <em>ctrl</em>, <em>alt</em>, <em>lwin</em>, <em>rwin</em></p>
	 *       <p>If no qualifiers were down, the string will be: <em>none</em></p>
	 * @returns {string}
	 */

	qualifiers;
	/**
	 * <p>Returns <strong>True</strong> the first time the  {@link OnFileOperationComplete}&nbsp;event
	 *       is called. You should examine the action and other properties and return
	 *       <strong>True</strong> if you decide you want notification about this
	 *       operation. This will be <strong>False</strong> when you are called the
	 *       second time, when the operation is complete.</p>
	 * @returns {boolean}
	 */

	query;
	/**
	 * <p>Returns a  {@link Path}&nbsp;object representing
	 *       the&nbsp;source path of the operation.</p>
	 * @returns {Path}
	 */

	source;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link Tab}&nbsp;object representing
	 *       the&nbsp;source folder tab.</p>
	 * @returns {Tab}
	 */

	tab;
} //end class
