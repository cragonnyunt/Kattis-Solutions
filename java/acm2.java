import java.util.Arrays;
import java.util.Scanner;

public class acm2 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		int p = scan.nextInt();
		int[] times = new int[N];
		for (int i = 0; i < N; i++)
			times[i] = scan.nextInt();
		int num_ac = 0;
		int penalty_time = 0;
		int total_time = 0;
		if (times[p] > 300) {
			num_ac = 0;
			penalty_time = 0;
		} else {
			num_ac++;
			penalty_time = times[p];
			total_time = times[p];
			int _i = times[p];
			Arrays.sort(times);
			for (int i = 0; i < N; i++) {
				if (total_time + times[i] > 300)
					break;
				if (times[i] != _i) {
					num_ac++;
					total_time += times[i];
					penalty_time += total_time;
				}
			}
		}
		System.out.println(num_ac + " " + penalty_time);
		scan.close();
	}
}
