/**
 *This object represents a folder tab in a tab group.
 */
class TabGroupTabEntry {
	/**
	 * <p>Returns<em> </em>the color, if any, assigned to this tab.</p>
	 * @returns {string}
	 */

	color;
	/**
	 * <p>Returns the folder format of this tab.</p>
	 * @returns {Format}
	 */

	format;
	/**
	 * <p>Returns the link ID of this tab, if it is linked to another tab. Both
	 *       tabs will have the same link ID but otherwise the value is meaningless.
	 *       Use the <strong><a href="TabGroup.htm">TabGroup</a>.Link</strong> and
	 *       <strong>Unlink</strong> methods to change tab linkage.</p>
	 * @returns {int}
	 */

	linkid;
	/**
	 * <p>If this tab is linked as a slave, returns the string
	 *       <strong>"slave"</strong>.</p>
	 * @returns {string}
	 */

	linktype;
	/**
	 * <p>Returns the lock type of this tab. Valid values are
	 *       <strong>"on"</strong>, <strong>"off"</strong>, <strong>"changes"</strong>
	 *       and <strong>"reuse"</strong>.</p>
	 * @returns {string}
	 */

	locked;
	/**
	 * <p>Returns the name of this tab if one is assigned. Tabs that don't have
	 *       specific names assigned will usually show the last component of the path
	 *       as their name.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>Returns<strong> </strong>the path that this tab will load when it's
	 *       opened.</p>
	 * @returns {Path}
	 */

	path;
	/**
	 * <p>Returns a duplicate of this tab entry.</p>
	 * @returns {TabGroupTabEntry}
	 */
	Duplicate(){}
} //end class
