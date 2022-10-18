/**
 *The SortOrder object is returned by the Format.manual_sort_order property if manual sort mode is active. It lets you query and modify the sort order.
 */
class SortOrder {
	/**
	 * <p>Returns a  {@link Vector}&nbsp;of strings representing
	 *       the current sort order of files in the folder. If multiple manual sort
	 *       orders have been defined, you can provide the name of a specific sort
	 *       order as an argument&nbsp;to this method. If called with no arguments it
	 *       returns the current sort order by default.</p>
	 * @param {string} name
	 * @returns {Vector}
	 */
	GetOrder(name){}
	/**
	 * <p>You can pass this method a  {@link Vector}&nbsp;of strings to change
	 *       the sort order of the current folder. You can optionally provide the name
	 *       of a sort order as the second parameter if you’ve got more than one sort
	 *       order defined.<br></p>
	 * @param {Vector} order
	 * @param {string} name
	 *
	 */
	SetOrder(order, name){}
	/**
	 * <p>Resets the manual sort order to the currently selected sort order (e.g.
	 *       if the file display header indicates that it is sorted by name,
	 *       <strong>ResetOrder</strong> would reset to filename order). You can
	 *       optionally provide the name of a sort order as the second parameter if
	 *       you’ve got more than one sort order defined.</p>
	 * @param {string} name
	 *
	 */
	ResetOrder(name){}
} //end class
