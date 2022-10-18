/**
 *The DialogListGroup object represents a group in a list view control in a script dialog. It's returned by the Control.GetGroupById method.
 */
class DialogListGroup {
	/**
	 * <p>Returns or sets the expansion state of this group. The group must have
	 *       been added as "collapsible" via the <strong>Control.AddGroup</strong>
	 *       method.</p>
	 * @returns {boolean}
	 */

	expanded;
	/**
	 * <p>Returns the ID of this group.</p>
	 * @returns {int}
	 */

	id;
	/**
	 * <p>Returns the name of this group.</p>
	 * @returns {string}
	 */

	name;
} //end class
