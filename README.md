# JS-Symbol-toPrimitive

What happens when objects are added obj1 + obj2, subtracted obj1 - obj2 or printed using console.log(obj)?

In that case, objects are auto-converted to primitives, and then the operation is carried out.

we’ve seen the rules for numeric, string and boolean conversions of primitives. But we left a gap for objects. Now, as we know about methods and symbols it becomes possible to fill it.

All objects are true in a boolean context. There are only numeric and string conversions.
The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.
As for the string conversion – it usually happens when we output an object like alert(obj) and in similar contexts.

ToPrimitive

We can fine-tune string and numeric conversion, using special object methods.

There are three variants of type conversion, so-called “hints”, described in the specification:
