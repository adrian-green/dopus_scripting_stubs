/**
 *This object represents a list of folder tabs in a tab group.
 */
class TabGroupTabList {
	/**
	 * <p>Returns a {@link TabGroupTabEntry} object
	 *       representing the active (default) folder tab in this tab
	 *   list.</p>
	 * @returns {TabGroupTabEntry}
	 */

	active;
	/**
	 * <p>Adds a folder tab entry to this list. You can provide a </p>
	 *       <p><a href="TabGroupTabEntry.htm"><strong>TabGroupTabEntry
	 *       </strong></a>object, or the <em>path </em>and optional <em>name</em> of
	 *       the new folder tab.</p>
	 * @param {TabGroupTabEntry} tabgrouptabentry
	 * @returns {TabGroupTabEntry}
	 */
	AddTab(tabgrouptabentry){}

	/**
	 * @param {string} path
	 * @param {string} name
	 * @returns {TabGroupTabEntry}
	 */
	AddTab(path, name){}
	/**
	 * <p>Deletes a folder tab entry from this list. You can provide a </p>
	 *       <p><a href="TabGroupTabEntry.htm"><strong>TabGroupTabEntry
	 *       </strong></a>object, or the index of the tab entry to delete. If you
	 *       specify the index as <strong>-1</strong> then all tab entries will be
	 *       deleted.</p>
	 * @param {TabGroupTabEntry|int} tabgrouptabentry_or_index
	 */
	DeleteTab(tabgrouptabentry_or_index){}
	/**
	 * <p>Inserts a folder tab entry to this list. You can provide a </p>
	 *       <p> {@link TabGroupTabEntry}object,
	 *       or the <em>path </em>and optional <em>name</em> of the new folder tab. The
	 *       final parameter must be the index indicating the desired insertion
	 *       position.</p>
	 * @param {TabGroupTabEntry} tabgrouptabentry
	 * @param {int} index
	 * @returns {TabGroupTabEntry}
	 */
	InsertTabAt(tabgrouptabentry, index){}

	/**
	 * @param {string} path
	 * @param {string} name
	 * @param {int} index
	 * @returns {TabGroupTabEntry}
	 */
	InsertTabAt(path, name, index){}
	/**
	 * <p>Moves the specified tab entry to a new position, and optionally a new
	 *       tab list. If the second parameter is a  <strong>TabGroupTabList
	 *       </strong>object then the tab entry will be moved to that list. The final
	 *       parameter must be the index indicating the desired insertion position. </p>
	 * @param {TabGroupTabEntry} entry
	 * @param {TabGroupTabList} list
	 * @param {int} index
	 *
	 */
	MoveTabTo(entry, list, index){}
} //end class
