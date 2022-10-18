/**
 *This object exposes information about a file group (when a Tab is set to group by a particular column). It is used by the Item and Tab objects.
 */
class FileGroup {
	/**
	 * <p>Returns the name of the group.</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>Returns <strong>True</strong> if the group is currently
	 *     collapsed.</p>
	 * @returns {boolean}
	 */

	collapsed;
	/**
	 * <p>Returns the number of items in this group. Note that groups can be
	 *       empty; empty groups are not displayed in the file display but will still
	 *       be returned by the <strong>Tab.filegroups</strong> property.</p>
	 * @returns {int}
	 */

	count;
	/**
	 * <p>Returns the&nbsp;id number of&nbsp;this group. Id numbers are arbitrary
	 *       - you shouldn't place any meaning on the actual value, but you can compare
	 *       the&nbsp;id fields as an easy way to tell if two items are in the same
	 *       group.</p>
	 * @returns {int}
	 */

	id;
	/**
	 * <p>Returns a collection of  {@link Item}&nbsp;objects that represents all
	 *       the files and folders in this group.</p>
	 * @returns {Item[]}
	 */

	members;
	/**
	 * <p>Returns a string indicating the collation type of the
	 *   group.</p>
	 * @returns {string}
	 */

	type;
} //end class
