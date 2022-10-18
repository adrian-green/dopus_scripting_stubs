/**
 *This object represents a collection of one or more file type groups.
 */
class FileTypeGroups {
	/**
	 * <p>Lets you enumerate the file type groups represented by this
	 *     object.</p>
	 * @returns {FiletypeGroup[]}
	 */

	_default_value

	/**
	 * <p>Searches the file type group collection for the named group.</p>
	 *       <p>If Opus is not running in English, the translated name is compared
	 *       first; if not found, it will search for the native English name for the
	 *       built-in groups.</p>
	 *       <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link FiletypeGroup} object or
	 *       <strong>False </strong>if not found.<br>&nbsp;</p>
	 * @param {string} group
	 * @returns {FiletypeGroup|boolean}
	 */
	GetGroup(group) {
	}

	/**
	 * <p>Returns a new <strong>FiletypeGroups&nbsp;</strong>object containing
	 *       the subset of groups that the specified filename (or file extension) is a
	 *       member of. You would normally only call this method on the object returned
	 *       by the <!--?xml:namespace prefix = "c1" /--><strong><a href="DOpus.htm">DOpus</a>.filetypegroups
	 *     </strong>property.<br>&nbsp;</p>
	 * @param {string} filename
	 * @returns {FileTypeGroups}
	 */
	MatchExt(filename) {
	}

	/**
	 * <p>Returns the translated name of the named built-in file type group.</p>
	 *       <p>If not found, or no translation exists, the input string is
	 *       returned.</p>
	 *       <p>&nbsp;</p>
	 *       <p>For example, when running in French, calling this method with "Movies"
	 *       as the input string would return "Vidéos".</p>
	 * @param {string} group
	 * @returns {string}
	 */
	Translate(group) {
	}
} //end class
