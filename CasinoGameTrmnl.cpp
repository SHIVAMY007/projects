#include <random>
#include <iostream>

using namespace std;

random_device rd;  // Obtain a random number from hardware
mt19937 eng(rd());  // Seed the generator
uniform_int_distribution<> distr(1, 10);  // Define the range [1, 10]

int generateRandomNumber() {
    return distr(eng);  // Generate and return a random number
}

int main() {
    for (int i = 0; i < 5; i++) {
        int random_number = generateRandomNumber();
        cout << "Random number between 1 and 10: " << random_number << endl;
    }

    return 0;
}