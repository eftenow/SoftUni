from unittest import TestCase, main


class ListTests(TestCase):
    def test_list_is_initialized_correctly(self):
        integer = IntegerList()
        self.assertEqual([], integer._IntegerList__data)

    def test_adds_new_element_from_int_type(self):
        integer = IntegerList()
        integer.add(4)
        self.assertEqual(integer._IntegerList__data, [4])
        integer.add(5)
        self.assertEqual(integer._IntegerList__data, [4, 5])

    def test_cannot_add_non_int_type_variables_raises(self):
        integer = IntegerList()
        with self.assertRaises(ValueError) as ex:
            integer.add('5')
        self.assertEqual(str(ex.exception), "Element is not Integer")

        with self.assertRaises(ValueError) as ex:
            integer.add(4.2)
        self.assertEqual(str(ex.exception), "Element is not Integer")

    def test_remove_index_out_of_range_raises(self):
        integer = IntegerList(4, 2)
        with self.assertRaises(IndexError) as ex:
            integer.remove_index(2)
        self.assertEqual(str(ex.exception), "Index is out of range")

    def test_remove_index_removes_element_by_ind(self):
        integer = IntegerList(5, 3, 9)
        integer.remove_index(2)
        self.assertEqual(integer._IntegerList__data, [5, 3])
        integer.remove_index(0)
        self.assertEqual(integer._IntegerList__data, [3])

    def test_get_element_index_out_of_range_raises(self):
        integer = IntegerList(4, 2)
        with self.assertRaises(IndexError) as ex:
            integer.get(2)
        self.assertEqual("Index is out of range", str(ex.exception))

    def test_get_returns_element_by_index(self):
        integer = IntegerList(5, 2)
        value = integer.get(0)
        self.assertEqual(value, 5)

    def test_insert_invalid_index_raises(self):
        integer = IntegerList(3, 2)
        with self.assertRaises(IndexError) as ex:
            integer.insert(2, 2)
        self.assertEqual(str(ex.exception), "Index is out of range")

    def test_insert_integer_invalid_type_raises(self):
        integer = IntegerList(3, 2)
        with self.assertRaises(ValueError) as ex:
            integer.insert(1, '2')
        self.assertEqual(str(ex.exception), "Element is not Integer")

    def test_insert_integer_works(self):
        integer = IntegerList(1)
        integer.insert(0, 5)
        self.assertEqual([5, 1], integer._IntegerList__data)

    def test_get_biggest(self):
        integer = IntegerList(1, 5, -100, 11)
        biggest_num = integer.get_biggest()
        self.assertEqual(biggest_num, 11)

    def test_get_index(self):
        integer = IntegerList(1, 5, -100, 11)
        biggest_num = integer.get_index(5)
        self.assertEqual(biggest_num, 1)


if __name__ == "__main__":
    main()
