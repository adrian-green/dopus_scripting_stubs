/**
 *This object is a collection of all defined folder aliases. It is retrieved using the DOpus.aliases collection property.
 */
class Aliases {
	/**
	 * <p>You can enumerate the <strong>Aliases</strong> object, or query the
	 *       value of an individual alias by name (e.g.
	 *       <em>DOpus.Output(DOpus.aliases("desktop").path);</em>)</p>
	 * @returns {Alias[]}
	 */
	_default_value;

	/**
	 * <p>Adds a new alias to the system with the specified name and path. Note
	 *       that you should <strong>not</strong> provide the leading forward-slash (/)
	 *       in the alias name.</p>
	 * @param {string} name
	 * @param {string} path
	 *
	 */
	Add(name, path) {
	}

	/**
	 * <p>Deletes the specified alias.</p>
	 * @param {string} name
	 *
	 */
	Delete(name) {
	}

	/**
	 * <p>Updates the state of this object. When the <strong>Aliases</strong>
	 *       object is first retrieved via <strong>DOpus.aliases</strong>, a snapshot
	 *       is taken of the aliases at that time. If you make changes via the object
	 *       it will reflect them but any changes made outside the script (e.g. via the
	 *       <strong>Favorites ADD=alias</strong> command) will not be detected unless
	 *       you call the <strong>Update</strong> method.</p>
	 *
	 */
	Update() {
	}
} //end class
