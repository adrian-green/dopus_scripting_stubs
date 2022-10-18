/**
 *This object is similar to an array or vector (e.g. Vector) in that it can store one or more objects, but has the advantage of using a dictionary system to locate objects rather than numeric indexes. It is obtained from the DOpusFactory.Map method.
 */
class Map {
	/**
	 * <p>Returns the number of elements the&nbsp;<strong>Map</strong> currently
	 *       holds.</p>
	 * @returns {int}
	 */

	count;
	/**
	 * <p>Returns <strong>True</strong> if the <strong>Map</strong> is empty,
	 *       <strong>False</strong> if not.</p>
	 * @returns {boolean}
	 */

	empty;
	/**
	 * <p>A synonym for <strong>count</strong>.</p>
	 * @returns {int}
	 */

	length;
	/**
	 * <p>A synonym for <strong>count</strong>.</p>
	 * @returns {int}
	 */

	size;
	/**
	 * <p>Copies the contents of another&nbsp;<strong>Map</strong> to this
	 *       one.</p>
	 * @param {Map} from
	 *
	 */
	assign(from){}
	/**
	 * <p>Clears the contents of the <strong>Map</strong>.</p>
	 *
	 */
	clear(){}
	/**
	 * <p>Erases the element matching the specified key, if it exists in the
	 *       map.</p>
	 * @param {*} key
	 *
	 */
	erase(key){}
	/**
	 * <p>Returns <strong>True</strong> if the specified key exists in the
	 *       map.</p>
	 * @param {*} key
	 * @returns {boolean}
	 */
	exists(key){}
	/**
	 * <p>Returns the value of the specified key.</p>
	 * @param {*} key
	 * @returns {*}
	 */
	get(key){}
	/**
	 * <p>Merges the contents of another <strong>Map</strong> with this
	 *     one.</p>
	 * @param {Map} from
	 *
	 */
	merge(from){}
	/**
	 * <p>Sets the value of the specified key.</p>
	 * @param {*} key
	 * @param {*} value
	 *
	 */
	set(key, value){}
} //end class
