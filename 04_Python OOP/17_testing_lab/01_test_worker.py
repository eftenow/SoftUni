from unittest import TestCase, main


class WorkerTests(TestCase):
    def test_worker_is_initialized_correctly(self):
        worker = Worker('Test', 100, 10)

        self.assertEqual('Test', worker.name)
        self.assertEqual(100, worker.salary)
        self.assertEqual(10, worker.energy)
        self.assertEqual(0, worker.money)

    def test_energy_is_increased_after_rest(self):
        worker = Worker('Test', 100, 10)

        self.assertEqual(worker.energy, 10)
        worker.rest()
        self.assertEqual(worker.energy, 11)

    def test_negative_worker_energy_raises(self):
        worker = Worker('Test', 100, -1)

        with self.assertRaises(Exception) as ex:
            worker.work()
        self.assertEqual(str(ex.exception), 'Not enough energy.')

    def test_worker_money_increase_after_working(self):
        worker = Worker('Test', 100, 10)
        worker.work()
        self.assertEqual(worker.money, 100)
        worker.work()
        self.assertEqual(worker.money, 200)

    def test_worker_energy_decreases_after_work(self):
        worker = Worker('Test', 100, 10)
        worker.work()
        self.assertEqual(worker.energy, 9)

    def test_get_info_returns_correct_message(self):
        worker = Worker('Test', 100, 10)
        info = worker.get_info()
        self.assertEqual(info, 'Test has saved 0 money.')


if __name__ == '__main__':
    main()
