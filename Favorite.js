/**
 *The Favorite object represents a favorite folder. It is retrieved by enumerating or indexing the Favorites object.
 */
class Favorite {
	/**
	 * <p>Returns the name of the favorite folder or sub-folder.</p>
	 * @returns {string}
	 */

	_default_value;
	/**
	 * <p>Returns <strong>True</strong> if this is a sub-folder,
	 *       <strong>False</strong> if it's a favorite folder or
	 *       separator.<br>&nbsp;</p>
	 *       <p>If this object is a sub-folder it also behaves like a {@link Favorites}object as well as a
	 *       <strong>Favorite</strong> object, and can be enumerated and have elements
	 *       added and removed from it.</p>
	 * @returns {boolean}
	 */

	folder;
	/**
	 * <p>Returns <strong>True</strong> if this is a separator.</p>
	 * @returns {boolean}
	 */

	separator;
	/**
	 * <p>Returns the path this favorite folder refers to as a  {@link Path}&nbsp;object.</p>
	 * @returns {Path}
	 */

	path;

	/**
	 * <p>Changes the name of this favorite folder. Note that changes you make to
	 *       the list are not saved until you call the {@link Favorites}<strong>.Save</strong>
	 *       method. </p>
	 * @param {string} name
	 *
	 */
	SetName(name) {
	}

	/**
	 * <p>Changes the path this favorite folder refers to. Note that changes you
	 *       make to the list are not saved until you call the <!--?xml:namespace prefix = "c1" /-->{@link Favorites}<strong>.Save</strong>
	 *       method. </p>
	 * @param {string|object} path

	 *
	 */
	SetPath(path) {
	}
} //end class
