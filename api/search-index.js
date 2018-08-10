var N = null;var searchIndex = {};
searchIndex["css_rs_macro"]={"doc":"css-rs-macro is a procedural macro that allows you to write your CSS next to your Rust views.","items":[[5,"css","css_rs_macro","Parses the syntax for writing inline css. Every call to css! will have its class name incremented by one.",N,[[["tokenstream"]],["tokenstream"]]]],"paths":[]};
searchIndex["virtual_dom_rs"]={"doc":"","items":[[3,"Closure","virtual_dom_rs","A handle to both a closure in Rust as well as JS closure which will invoke the Rust closure.",N,N],[4,"Patch","","A `Patch` encodes an operation that modifies a real DOM element.",N,N],[13,"AppendChildren","","Append a vector of child nodes to a parent node id.",0,N],[13,"TruncateChildren","","For a `node_i32`, remove all children besides the first `len`",0,N],[13,"Replace","","Replace a node with another node. This typically happens when a node's tag changes. ex:  becomes ",0,N],[13,"AddAttributes","","Add attributes that the new node has that the old node does not",0,N],[13,"RemoveAttributes","","Remove attributes that the old node had that the new node doesn't",0,N],[13,"ChangeText","","",0,N],[5,"diff","","",N,[[["virtualnode"],["virtualnode"]],["vec",["patch"]]]],[5,"patch","","",N,[[["element"],["vec"]]]],[0,"html_macro","","",N,N],[4,"TagType","virtual_dom_rs::html_macro","",N,N],[13,"Open","","",1,N],[13,"Close","","",1,N],[11,"eq","","",1,[[["self"],["tagtype"]],["bool"]]],[0,"virtual_node","virtual_dom_rs","",N,N],[3,"RefCell","virtual_dom_rs::virtual_node","A mutable memory location with dynamically checked borrow rules",N,N],[3,"Rc","","A single-threaded reference-counting pointer. 'Rc' stands for 'Reference Counted'.",N,N],[3,"VirtualNode","","",N,N],[12,"tag","","",2,N],[12,"props","","",2,N],[12,"events","","",2,N],[12,"children","","",2,N],[12,"text","","Some(String) if this is a text node. When patching these into a real DOM these use `document.createTextNode(text)`",2,N],[3,"ParsedVirtualNode","","",N,N],[12,"tag","","",3,N],[12,"props","","",3,N],[12,"events","","",3,N],[12,"children","","",3,N],[12,"parent","","",3,N],[12,"text","","",3,N],[3,"Events","","We need a custom implementation of fmt::Debug since Fn() doesn't implement debug.",N,N],[12,"0","","",4,N],[11,"eq","","",2,[[["self"],["virtualnode"]],["bool"]]],[11,"ne","","",2,[[["self"],["virtualnode"]],["bool"]]],[11,"eq","","",3,[[["self"],["parsedvirtualnode"]],["bool"]]],[11,"ne","","",3,[[["self"],["parsedvirtualnode"]],["bool"]]],[11,"new","","",3,[[["str"]],["parsedvirtualnode"]]],[11,"text","","",3,[[["str"]],["parsedvirtualnode"]]],[11,"take_children","","",3,[[["self"]],["vec",["virtualnode"]]]],[11,"from","","",2,[[["parsedvirtualnode"]],["self"]]],[11,"new","","Create a new virtual node with a given tag.",2,[[["str"]],["virtualnode"]]],[11,"text","","Create a text node.",2,[[["str"]],["virtualnode"]]],[11,"create_element","","Build a DOM element by recursively creating DOM nodes for this element and it's children, it's children's children, etc.",2,[[["self"]],["element"]]],[11,"create_text_node","","",2,[[["self"]],["text"]]],[11,"from","","",3,[[["str"]],["self"]]],[11,"from","","",3,[[["string"]],["self"]]],[11,"from","","",3,[[["string"]],["self"]]],[11,"from","","",3,[[["virtualnode"]],["self"]]],[11,"from","","",3,[[["vec",["virtualnode"]]],["self"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"eq","","",4,[[["self"],["self"]],["bool"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","virtual_dom_rs","",0,[[["self"],["formatter"]],["result"]]],[11,"eq","","",0,[[["self"],["patch"]],["bool"]]],[11,"ne","","",0,[[["self"],["patch"]],["bool"]]],[11,"node_idx","","",0,[[["self"]],["usize"]]],[14,"html","","A macro which returns a root VirtualNode given some HTML and Rust expressions.",N,N],[14,"recurse_html","","",N,N],[11,"new","","Creates a new instance of `Closure` from the provided Rust closure.",5,[[["f"]],["closure"]]],[11,"wrap","","A mostly internal function to wrap a boxed closure inside a `Closure` type.",5,[[["box"]],["closure"]]],[11,"forget","","Leaks this `Closure` to ensure it remains valid for the duration of the entire program.",5,N],[11,"into","","",5,[[["self"]],["u"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","virtual_dom_rs::virtual_node","",6,[[["pathbuf"]],["rc",["path"]]]],[11,"from","","",6,[[["cstr"]],["rc",["cstr"]]]],[11,"from","","Converts a [`CString`] into a [`Rc`]`<CStr>` without copying or allocating.",6,[[["cstring"]],["rc",["cstr"]]]],[11,"from","","Converts a [`OsString`] into a [`Rc`]`<OsStr>` without copying or allocating.",6,[[["osstring"]],["rc",["osstr"]]]],[11,"from","","",6,[[["path"]],["rc",["path"]]]],[11,"from","","",6,[[["osstr"]],["rc",["osstr"]]]],[11,"default","","Creates a `RefCell<T>`, with the `Default` value for T.",7,[[],["refcell"]]],[11,"from","","",7,[[["t"]],["refcell"]]],[11,"clone","","Panics",7,[[["self"]],["refcell"]]],[11,"partial_cmp","","Panics",7,[[["self"],["refcell"]],["option",["ordering"]]]],[11,"lt","","Panics",7,[[["self"],["refcell"]],["bool"]]],[11,"le","","Panics",7,[[["self"],["refcell"]],["bool"]]],[11,"gt","","Panics",7,[[["self"],["refcell"]],["bool"]]],[11,"ge","","Panics",7,[[["self"],["refcell"]],["bool"]]],[11,"cmp","","Panics",7,[[["self"],["refcell"]],["ordering"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result",["error"]]]],[11,"eq","","Panics",7,[[["self"],["refcell"]],["bool"]]],[11,"partial_cmp","","Partial comparison for two `Rc`s.",6,[[["self"],["rc"]],["option",["ordering"]]]],[11,"lt","","Less-than comparison for two `Rc`s.",6,[[["self"],["rc"]],["bool"]]],[11,"le","","'Less than or equal to' comparison for two `Rc`s.",6,[[["self"],["rc"]],["bool"]]],[11,"gt","","Greater-than comparison for two `Rc`s.",6,[[["self"],["rc"]],["bool"]]],[11,"ge","","'Greater than or equal to' comparison for two `Rc`s.",6,[[["self"],["rc"]],["bool"]]],[11,"cmp","","Comparison for two `Rc`s.",6,[[["self"],["rc"]],["ordering"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result",["error"]]]],[11,"clone","","Makes a clone of the `Rc` pointer.",6,[[["self"]],["rc"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result",["error"]]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"drop","","Drops the `Rc`.",6,N],[11,"as_ref","","",6,[[["self"]],["t"]]],[11,"hash","","",6,N],[11,"deref","","",6,[[["self"]],["t"]]],[11,"eq","","Equality for two `Rc`s.",6,[[["self"],["rc"]],["bool"]]],[11,"ne","","Inequality for two `Rc`s.",6,[[["self"],["rc"]],["bool"]]],[11,"from","","",6,[[["t"]],["rc"]]],[11,"from","","",6,[[["str"]],["rc",["str"]]]],[11,"from","","",6,[[["vec"]],["rc"]]],[11,"from","","",6,[[["string"]],["rc",["str"]]]],[11,"from","","",6,[[["box"]],["rc"]]],[11,"from","","",6,N],[11,"fmt","","",6,[[["self"],["formatter"]],["result",["error"]]]],[11,"default","","Creates a new `Rc<T>`, with the `Default` value for `T`.",6,[[],["rc"]]],[11,"drop","virtual_dom_rs","",5,N],[11,"into","virtual_dom_rs::html_macro","",1,[[["self"]],["u"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"new","virtual_dom_rs::virtual_node","Creates a new `RefCell` containing `value`.",7,[[["t"]],["refcell"]]],[11,"into_inner","","Consumes the `RefCell`, returning the wrapped value.",7,[[["self"]],["t"]]],[11,"replace","","Replaces the wrapped value with a new one, returning the old value, without deinitializing either one.",7,[[["self"],["t"]],["t"]]],[11,"replace_with","","Replaces the wrapped value with a new one computed from `f`, returning the old value, without deinitializing either one.",7,[[["self"],["f"]],["t"]]],[11,"swap","","Swaps the wrapped value of `self` with the wrapped value of `other`, without deinitializing either one.",7,N],[11,"borrow","","Immutably borrows the wrapped value.",7,[[["self"]],["ref"]]],[11,"try_borrow","","Immutably borrows the wrapped value, returning an error if the value is currently mutably borrowed.",7,[[["self"]],["result",["ref","borrowerror"]]]],[11,"borrow_mut","","Mutably borrows the wrapped value.",7,[[["self"]],["refmut"]]],[11,"try_borrow_mut","","Mutably borrows the wrapped value, returning an error if the value is currently borrowed.",7,[[["self"]],["result",["refmut","borrowmuterror"]]]],[11,"as_ptr","","Returns a raw pointer to the underlying data in this cell.",7,N],[11,"get_mut","","Returns a mutable reference to the underlying data.",7,[[["self"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"new","","Constructs a new `Rc<T>`.",6,[[["t"]],["rc"]]],[11,"try_unwrap","","Returns the contained value, if the `Rc` has exactly one strong reference.",6,[[["rc"]],["result",["rc"]]]],[11,"into_raw","","Consumes the `Rc`, returning the wrapped pointer.",6,N],[11,"from_raw","","Constructs an `Rc` from a raw pointer.",6,N],[11,"downgrade","","Creates a new [`Weak`][weak] pointer to this value.",6,[[["rc"]],["weak"]]],[11,"weak_count","","Gets the number of [`Weak`][weak] pointers to this value.",6,[[["rc"]],["usize"]]],[11,"strong_count","","Gets the number of strong (`Rc`) pointers to this value.",6,[[["rc"]],["usize"]]],[11,"get_mut","","Returns a mutable reference to the inner value, if there are no other `Rc` or [`Weak`][weak] pointers to the same value.",6,[[["rc"]],["option"]]],[11,"ptr_eq","","Returns true if the two `Rc`s point to the same value (not just values that compare as equal).",6,[[["rc"],["rc"]],["bool"]]],[11,"make_mut","","Makes a mutable reference into the given `Rc`.",6,[[["rc"]],["t"]]],[11,"downcast","","Attempt to downcast the `Rc<Any>` to a concrete type.",6,[[["self"]],["result",["rc","rc"]]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"from","","",6,[[["t"]],["t"]]],[11,"to_string","","",6,[[["self"]],["string"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"to_string","","",2,[[["self"]],["string"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]]],"paths":[[4,"Patch"],[4,"TagType"],[3,"VirtualNode"],[3,"ParsedVirtualNode"],[3,"Events"],[3,"Closure"],[3,"Rc"],[3,"RefCell"]]};
initSearch(searchIndex);
