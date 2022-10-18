/**
 *This object represents a file type group (as configured in the File Type Groups section of the file type editor).
 */
class FiletypeGroup {
	/**
	 * <p>Returns the internal name of this group.</p>
	 *       <p>The internal name is always the same in all languages.</p>
	 *       <p>Groups that come pre-defined when you install Opus have internal names
	 *       like <em>"Archives"</em> and <em>"Music"</em> (which are also their
	 *       English display names).</p>
	 *       <p>User-defined groups have internal names which are unique, automatically
	 *       generated GUID strings like
	 *       <em>"{C4B716ED-2A9C-43C6-B325-7DADDEEFADA9}"</em>.</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>Returns the display name of this group.</p>
	 *       <p>The display name is what you see in the File Types editor. Display
	 *       names may be translated differently in different languages.</p>
	 * @returns {string}
	 */

	display_name;
	/**
	 * <p>Returns the tiles mode definition string for this group.</p>
	 * @returns {string}
	 */

	tiles;
	/**
	 * <p>Returns the tooltip definition string for this
	 * group.</p>
	 * @returns {string}
	 */

	tooltip;

	/**
	 * <p>Tests the filename (or extension)&nbsp;for membership of
	 *       this&nbsp;group. Returns <strong>True</strong> if the file is a member of
	 *       the group, or <strong>False</strong> if it is not.</p>
	 * @param {string} filename
	 * @returns {boolean}
	 */
	MatchExt(filename) {
	}
} //end class
