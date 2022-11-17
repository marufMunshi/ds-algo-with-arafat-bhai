let list = {
  value: 1,
  next: {
    value: 4,
    next: null,
  },
};

function recurrsive(_list) {
  console.log("_list", _list);
  if (_list.next === null) {
    console.log("null found");
    _list.next = { value: 6, next: null };
    return _list;
  }

  return recurrsive(_list.next);
}

recurrsive(list);

console.log("list", list);
