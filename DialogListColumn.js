/**
 *The DialogListColumn object represents a column in a Details mode list view control in a script dialog. It's obtained by enumerating the DialogListColumns object.
 */
class DialogListColumn {
	/**
	 * <p>Returns or sets the column's name.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>Set this property to <strong>True</strong> if you want this column to
	 *       automatically resize when the list view is resized horizontally. Only one
	 *       column can be set to auto-resize at a time.</p>
	 * @returns {boolean}
	 */

	resize;
	/**
	 * <p>Returns <strong>1</strong> if the list view is currently sorted
	 *       forwards by this column, <strong>-1</strong> if it's currently sorted
	 *       backwards by this column, or <strong>0</strong> otherwise. Settings this
	 *       property will re-sort the list.</p>
	 * @returns {int}
	 */

	sort;
	/**
	 * <p>Returns or sets the column's width in pixels. Set&nbsp;it
	 *       to&nbsp;<strong>-1</strong> to automatically size the column to fit its
	 *       content. You can automatically resize all columns at once using the
	 *       <strong>{@link DialogListColumns}.AutoSize</strong>
	 *       method.</p>
	 * @returns {int}
	 */

	width;
} //end class
