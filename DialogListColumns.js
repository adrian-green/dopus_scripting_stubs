/**
 *The DialogListColumns object lets you query or modify the columns in a Details mode list view control in a script dialog. Use the Control.columns property to obtain a DialogListColumns object.
 */
class DialogListColumns {
	/**
	 * <p>Adds a new column to the list view, and returns the index of the new
	 *       column.</p>
	 * @param {string} name
	 * @returns {int}
	 */
	AddColumn(name){}
	/**
	 * <p>Automatically sizes all columns in the list view to fit their
	 *       content.</p>
	 *
	 */
	AutoSize(){}
	/**
	 * <p>Deletes the specified column.</p>
	 * @param {int} index
	 *
	 */
	DeleteColumn(index){}
	/**
	 * <p>Returns a {@link DialogListColumn} object
	 *       representing the column in the specified position.</p>
	 * @param {int} index
	 * @returns {DialogListColumn}
	 */
	GetColumnAt(index){}
	/**
	 * <p>Inserts a new column in the list view at the specified position, and
	 *       returns the index of the new column.</p>
	 * @param {string} name
	 * @param {int} position
	 * @returns {int}
	 */
	InsertColumn(name, position){}
} //end class
