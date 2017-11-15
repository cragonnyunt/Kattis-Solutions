import java.util.HashSet;
import java.util.Scanner;

public class modulo {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		HashSet<Integer> set = new HashSet<>();
		for (int i = 0; i < 10; i++)
			set.add(scan.nextInt() % 42);
		System.out.println(set.size());
		scan.close();
	}
}
