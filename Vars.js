/**
 *This object represents a collection of variables. Depending on the variables' scope it can be obtained from the DOpus.vars, Lister.vars, Tab.vars, Command.vars or Script.vars properties.
 */
class Vars {
	/**
	 * <p>Returns a collection of the variables in the collection. You can
	 *       enumerate the {@link Var} elements or refer
	 *       to a specific one by its index or by its name. An example of how to do
	 *       that is in the <strong>Set</strong> documentation,
	 * below.</p>
	 * @returns {Var[]}
	 */

	_default_value

	/**
	 * <p>Deletes the named variable from the collection. You can also specify a
	 *       <a href="../Pattern_Matching_Syntax.htm">wildcard pattern</a> to delete
	 *       multiple variables (or <strong>*</strong> for all).</p>
	 * @param {string} name
	 *
	 */
	Delete(name) {
	}

	/**
	 * <p>Returns <strong>True</strong> if the named variable exists in the
	 *       collection, or <strong>False</strong> if it doesn't exist.</p>
	 * @param {string} name
	 * @returns {boolean}
	 */
	Exists(name) {
	}

	/**
	 * <p>Returns the value of the named variable.</p>
	 *       <p>You can use this method as an alternative to indexing the collection.
	 *       Once difference to note is that this method directly returns the
	 *       <em>value</em> stored in the variable. If you need the {@link Var} object which contains the value
	 *       (for example, to call <strong>var.Delete</strong> or change
	 *       <strong>var.persist</strong>) then you should index the collection
	 *       instead. An example of how to do that is in the <strong>Set</strong>
	 *       documentation, just below.</p>
	 * @param {string} name
	 * @returns {variant}
	 */
	Get(name) {
	}

	/**
	 * <p>Sets the named value to the specified value. You can use
	 *       this&nbsp;method as an alternative to indexing the collection.<br><br>You
	 *       can store any type of variable in a <strong>Vars</strong> collection,
	 *       although not all types can be saved to disk. If you want your variable to
	 *       be persistent you should only use <em>bool</em>, <em>int</em>,
	 *       <em>string</em>, <em>date</em>, <em>currency</em>&nbsp;or a {@link Vector} of those types.</p>
	 *       <p>Variables are not persistent by default. If you need them to be saved
	 *       across a restart, you need to request it explicitly. Here is an example in
	 *       VBScript:</p>
	 *       <p>&nbsp;</p><pre>    Dim varName, varValue1, varValue2
	 *     varName = "MyVariableName"
	 *
	 *     if (DOpus.Vars.Exists(varName)) then
	 *         varValue1 = DOpus.Vars.Get(varName)
	 *         DOpus.Output varName &amp; " = " &amp; varValue1
	 *     else
	 *         DOpus.Output varName &amp; " does not exist yet."
	 *     end if
	 *
	 *     varValue2 = "My Variable Value"
	 *
	 *     DOpus.Vars.Set varName, varValue2
	 *     DOpus.Vars(varName).persist = True</pre>
	 *       <p>&nbsp;</p>
	 *       <p>Here is the same example in JScript:</p>
	 *       <p>&nbsp;</p><pre>    var varName = "MyVariableName";
	 *
	 *     if (DOpus.Vars.Exists(varName)) {
	 *         var varValue1 = DOpus.Vars.Get(varName);
	 *         DOpus.Output(varName + " = " + varValue1);
	 *     } else {
	 *         DOpus.Output(varName + " does not exist yet.");
	 *     }
	 *
	 *     var varValue2 = "My Variable Value";
	 *
	 *     DOpus.Vars.Set(varName, varValue2);
	 *     DOpus.Vars(varName).persist = true;</pre>
	 *       <p>&nbsp;</p>
	 *       <p>On the first run, the example code will say the variable does not
	 *       against and set it to a value, turning on persistence afterwards. If it is
	 *       then run again, it will report the variable's value, and the value will
	 *       persist across a restart.</p>
	 * @param {string} name
	 * @param {variant} value
	 *
	 */
	Set(name, value) {
	}
} //end class
