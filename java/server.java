import java.util.Scanner;

public class server {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int T = scan.nextInt();
		int[] tasks = new int[n];
		for (int i = 0; i < n; i++)
			tasks[i] = scan.nextInt();
		int time = 0, jobs = 0;
		for (int t : tasks)
			if (time + t <= T) {
				time += t;
				jobs++;
			} else
				break;
		System.out.println(jobs);
		scan.close();
	}
}
