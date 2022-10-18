/**
 *This object represents a column that has been added to the display in a tab. A collection of columns can be obtained from the Format object.
 */
class Column {
	/**
	 * <p>Returns the name of the column.</p>
	 * @returns {string}
	 */

	_default_value;
	/**
	 * <p>Returns <strong>True</strong> if the column width is set to
	 *       <em>auto</em>.</p>
	 * @returns {boolean}
	 */

	autosize;
	/**
	 * <p>Returns&nbsp;<strong>True</strong> if the column width is set to
	 *       <i>collapse</i>.</p>
	 * @returns {boolean}
	 */

	collapse;
	/**
	 * <p>Returns <strong>True </strong>if the column width is set to
	 *       <i>expand</i>.</p>
	 * @returns {boolean}
	 */

	expand;
	/**
	 * <p>Returns <b>True</b> if the column width is set to
	 * <i>fill</i>.</p>
	 * @returns {boolean}
	 */

	fill;
	/**
	 * <p>Returns&nbsp;the name of the column as displayed in the Lister column
	 *       header.</p>
	 * @returns {string}
	 */

	header;
	/**
	 * <p>Returns the name of the column as displayed in the <em>Columns</em> tab
	 *       in the <em>Folder Options</em> dialog.</p>
	 * @returns {string}
	 */

	label;
	/**
	 * <p>Returns the maximum width of the column in pixels, or the string "fill"
	 *       if the maximum is set to <em>fill</em>.</p>
	 * @returns {int|string}
	 */

	max;
	/**
	 * <p>Returns the name of the column.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>Returns <strong>True</strong> if the sort direction of the column is
	 *       reversed.</p>
	 * @returns {boolean}
	 */

	reverse;
	/**
	 * <p>Returns the sort order of the column (e.g. 1 for the primary sort
	 *       field, 2 for the secondary sort field, etc). Returns 0 if the display is
	 *       not sorted by this column.</p>
	 * @returns {int}
	 */

	sort;
	/**
	 * <p>Returns the current display width of the column in
	 *   pixels.</p>
	 * @returns {int}
	 */

	width;
} //end class
