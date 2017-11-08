import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Scanner;

public class happyprime {
    static ArrayList<Integer> Happy_Prime_array = new ArrayList<>();
    static {
        int SIZE = 10001;
        boolean[] array = new boolean[SIZE];
        HashSet<Integer> be_happy = new HashSet<>();
        HashSet<Integer> be_unhappy = new HashSet<>();
        Arrays.fill(array, true);
        array[0] = false;
        array[1] = false;
        for (int i = 2; i < SIZE; i++) {
            if (array[i]) {
                ArrayList<Integer> store = new ArrayList<>();
                int num = i;
                for (;;) {
                    if (be_happy.contains(num)) {
                        Happy_Prime_array.add(i);
                        break;
                    }
                    if (be_unhappy.contains(num))
                        break;
                    store.add(num);
                    int sum = 0;
                    while (num > 0) {
                        int digit = num % 10;
                        sum += digit * digit;
                        num /= 10;
                    }
                    if ((num = sum) < 10) {
                        if (num == 1 || num == 7) {
                            be_happy.addAll(store);
                            Happy_Prime_array.add(i);
                        } else
                            be_unhappy.addAll(store);
                    }
                }
                for (int j = 2 * i; j < SIZE; j += i)
                    array[j] = false;
            }
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int P = scan.nextInt();
        while (P-- > 0) {
            int K = scan.nextInt();
            int m = scan.nextInt();
            System.out.println(K + " " + m + " " + (Collections.binarySearch(Happy_Prime_array, m) > 0 ? "YES" : "NO"));
        }
        scan.close();
    }
}
