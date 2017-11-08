import java.util.HashMap;
import java.util.Scanner;

public class haypoints {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int m = scan.nextInt();
		int n = scan.nextInt();
		HashMap<String, Integer> salary = new HashMap<>(m);
		while (m-- > 0)
			salary.put(scan.next(), scan.nextInt());
		while (n-- > 0) {
			int total_salary = 0;
			String job;
			while (!(job = scan.next()).equals(".")) {
				if (salary.containsKey(job))
					total_salary += salary.get(job);
			}
			System.out.println(total_salary);
		}
		scan.close();
	}
}
