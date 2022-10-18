/**
 *This object represents a folder alias, and is retrieved using the Aliases object.
 */
class Alias {
	/**
	 * <p>Returns the name of the alias.</p>
	 * @returns {string}
	 */
	_default_value;
	/**
	* <p>Returns the target of the alias as a  {@link Path}&nbsp;object.</p>
	* @returns {Path}
	*/

	path;
	/**
	* <p><strong>True</strong> if the object is a system-defined alias,
		*       <strong>False</strong> if it is user defined.</p>
	* @returns {boolean}
	*/

	system;
} //end class
