/**
 *This object is provided to the OnDoubleClick method, which is called when a file or folder is double-clicked.
 */
class DoubleClickData {
	/**
	 * <p>Set this property&nbsp;to <strong>False</strong> to prevent
	 *       the&nbsp;<strong><a href="OnDoubleClick.htm">OnDoubleClick</a>
	 *       </strong>event being called for any further files during this operation
	 *       (this is only effective if more than one file was double-clicked). Any
	 *       remaining files will be opened according to their default
	 *   handlers.</p>
	 * @returns {boolean}
	 */

	call;
	/**
	 * <p>Set this property to <strong>False</strong> to abort double-click
	 *       processing altogether on any further files during this operation (this is
	 *       only effective if more than one file was double-clicked). </p>
	 * @returns {boolean}
	 */

	cont;
	/**
	 * <p>Returns <strong>True</strong> if your <!--?xml:namespace prefix = "c1" /-->{@link OnDoubleClick} event is being
	 *       called with only a path (via the <strong>path </strong>property) and not a
	 *       full <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;object. This will occur if
	 *       you set the <strong><a href="ScriptInitData.htm">ScriptInitData</a>.early_dblclk
	 *       </strong>property to <strong>True </strong>when initialising your
	 *       script.<br><br>When early is <strong>True</strong>, you can set the
	 *       <strong>skipfull</strong> to <strong>True</strong> to prevent the second
	 *       call with a full <strong>Item</strong> object.</p>
	 * @returns {boolean}
	 */

	early;
	/**
	 * <p>Returns <strong>True</strong> if the item double-clicked is a
	 *       directory, <strong>False</strong> if it's a file.</p>
	 * @returns {boolean}
	 */

	is_dir;
	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;object representing the
	 *       item that was double-clicked. This property is only present if the
	 *       <strong>early</strong> property is <strong>False</strong>.</p>
	 * @returns {Item}
	 */

	item;
	/**
	 * <p>Returns a string that indicates the mouse button that launched the
	 *       double-click. The string can be one of the following: <em>left</em>,
	 *       <em>middle</em>, <em>none</em>.</p>
	 * @returns {string}
	 */

	mouse;
	/**
	 * <p>This is set to <strong>True</strong> if multiple files were
	 *       double-clicked.</p>
	 * @returns {boolean}
	 */

	multiple;
	/**
	 * <p>Returns a {@link Path} object providing
	 *       the full pathname of the item that was double-clicked.</p>
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
	 * <p>When the early property is <strong>True</strong>,
	 *       set&nbsp;<strong>skipfull</strong> to <strong>True</strong> to prevent
	 *       your <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link OnDoubleClick} event from
	 *       being called a second time.</p>
	 * @returns {boolean}
	 */

	skipfull;
	/**
	 * <p>Returns a  {@link Tab}&nbsp;object representing the tab
	 *       that the item was double-clicked in.</p>
	 * @returns {Tab}
	 */

	tab;
} //end class
