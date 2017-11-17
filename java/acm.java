import java.util.ArrayList;
import java.util.Scanner;

public class acm {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n;
		ArrayList<Integer> time = new ArrayList<>();
		ArrayList<Character> problem = new ArrayList<>();
		ArrayList<Boolean> isRight = new ArrayList<>();
		while ((n = scan.nextInt()) != -1) {
			time.add(n);
			problem.add(scan.next().charAt(0));
			isRight.add(scan.next().equals("right"));
		}
		int prob_coun = 0, total_time = 0;
		ArrayList<Character> solved = new ArrayList<Character>();
		for (int i = 0; i < time.size(); i++)
			if (isRight.get(i)) {
				solved.add(problem.get(i));
				prob_coun++;
				total_time += time.get(i);
			}
		for (int i = 0; i < time.size(); i++)
			if (!isRight.get(i) && solved.contains(problem.get(i)))
				total_time += 20;
		System.out.printf("%d %d", prob_coun, total_time);
		scan.close();
	}
}
