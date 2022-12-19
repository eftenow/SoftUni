from unittest import TestCase, main


class CarTests(TestCase):
    def test_car_is_initialized_properly(self):
        car = Car(1, 'Fiat', 5, 30)
        self.assertEqual(car.make, 1)
        self.assertEqual(car.model, 'Fiat')
        self.assertEqual(car.fuel_consumption, 5)
        self.assertEqual(car.fuel_capacity, 30)

    def test_make_no_value_or_null_raises(self):
        with self.assertRaises(Exception) as ex:
            car = Car("", 'Fiat', 5, 30)
        self.assertEqual(str(ex.exception), "Make cannot be null or empty!")
        with self.assertRaises(Exception) as ex:
            car = Car(0, 'Fiat', 5, 30)
        self.assertEqual(str(ex.exception), "Make cannot be null or empty!")

    def test_model_no_value_raises(self):
        with self.assertRaises(Exception) as ex:
            car = Car(2, '', 5, 30)
        self.assertEqual(str(ex.exception), "Model cannot be null or empty!")
        with self.assertRaises(Exception) as ex:
            car = Car(2, 0, 5, 30)
        self.assertEqual(str(ex.exception), "Model cannot be null or empty!")

    def test_fuel_consumption_cannot_be_zero_or_negative_raises(self):
        with self.assertRaises(Exception) as ex:
            car = Car(2, 'Fiat', -5, 30)
        self.assertEqual(str(ex.exception), "Fuel consumption cannot be zero or negative!")
        with self.assertRaises(Exception) as ex:
            car = Car(2, 'Fiat', 0, 30)
        self.assertEqual(str(ex.exception), "Fuel consumption cannot be zero or negative!")

    def test_fuel_capacity_cannot_be_zero_or_negative_raises(self):
        with self.assertRaises(Exception) as ex:
            car = Car(2, 'Fiat', 5, -30)
        self.assertEqual(str(ex.exception), "Fuel capacity cannot be zero or negative!")
        with self.assertRaises(Exception) as ex:
            car = Car(2, 'Fiat', 5, 0)
        self.assertEqual(str(ex.exception), "Fuel capacity cannot be zero or negative!")

    def test_fuel_amount_cannot_be_negative_raises(self):
        car = Car(2, 'Fiat', 5, 30)
        with self.assertRaises(Exception) as ex:
            car.fuel_amount = -5
        self.assertEqual(str(ex.exception), "Fuel amount cannot be negative!")

    def test_cannot_refuel_with_zero_or_negative_raises(self):
        car = Car(2, 'Fiat', 5, 30)

        with self.assertRaises(Exception) as ex:
            car.refuel(0)
        self.assertEqual("Fuel amount cannot be zero or negative!", str(ex.exception))
        with self.assertRaises(Exception) as ex:
            car.refuel(-3)
        self.assertEqual("Fuel amount cannot be zero or negative!", str(ex.exception))

    def test_refuel_car_with_more_than_max_capacity(self):
        car = Car(2, 'Fiat', 5, 30)
        car.refuel(40)
        self.assertEqual(30, car.fuel_amount)

    def test_refuel_car(self):
        car = Car(2, 'Fiat', 5, 30)
        car.refuel(10)
        self.assertEqual(10, car.fuel_amount)


    def test_drive_with_not_enough_fuel_raises(self):
        car = Car(2, 'Fiat', 5, 30)
        car.refuel(1)
        with self.assertRaises(Exception) as ex:
            car.drive(21)
        self.assertEqual("You don't have enough fuel to drive!", str(ex.exception))

    def test_drive_with_enough_fuel(self):
        car = Car(2, 'Fiat', 5, 30)
        car.refuel(20)
        car.drive(100)
        self.assertEqual(car.fuel_amount, 15.0)


if __name__ == '__main__':
    main()
