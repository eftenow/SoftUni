from unittest import TestCase, main


class CatTests(TestCase):
    def test_cat_size_increases_after_eat(self):
        cat = Cat('cat')
        cat.eat()
        self.assertEqual(cat.size, 1)

    def test_cat_is_fed_after_eating(self):
        cat = Cat('cat')
        cat.eat()
        self.assertTrue(cat.fed)

    def test_cat_cannot_eat_after_already_fed_raises(self):
        cat = Cat('cat')
        cat.eat()

        with self.assertRaises(Exception) as ex:
            cat.eat()
        self.assertEqual(str(ex.exception), 'Already fed.')

    def test_cat_cannot_fall_asleep_when_hungry_raises(self):
        cat = Cat('cat')

        with self.assertRaises(Exception) as ex:
            cat.sleep()

        self.assertEqual(str(ex.exception), 'Cannot sleep while hungry')

    def test_cat_is_not_sleepy_after_sleeping(self):
        cat = Cat('cat')
        cat.eat()
        cat.sleep()
        self.assertFalse(cat.sleepy)

if __name__ == '__main__':
    main()
