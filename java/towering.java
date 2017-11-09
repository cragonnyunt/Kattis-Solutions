import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class towering {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int[] towers = new int[6];
		int[] boxes = new int[2];
		int tower_sums = 0;
		for (int i = 0; i < towers.length; i++)
			tower_sums += towers[i] = scan.nextInt();
		for (int i = 0; i < boxes.length; i++)
			boxes[i] = scan.nextInt();
		ArrayList<Integer> first = new ArrayList<>(3);
		ArrayList<Integer> second = new ArrayList<>(3);
		OUTSIDE: for (int i = 0; i < towers.length; i++) {
			for (int j = 0; j < i; j++) {
				for (int k = 0; k < j; k++) {
					int partial_sums;
					if ((partial_sums = towers[i] + towers[j] + towers[k]) == boxes[0]) {
						if (tower_sums - partial_sums == boxes[1]) {
							first.add(towers[i]);
							first.add(towers[j]);
							first.add(towers[k]);
							for (int index = 0; index < towers.length; index++)
								if (index != i && index != j && index != k)
									second.add(towers[index]);
							break OUTSIDE;
						}
					} else if ((partial_sums = towers[i] + towers[j] + towers[k]) == boxes[1]) {
						if (tower_sums - partial_sums == boxes[0]) {
							second.add(towers[i]);
							second.add(towers[j]);
							second.add(towers[k]);
							for (int index = 0; index < towers.length; index++)
								if (index != i && index != j && index != k)
									first.add(towers[index]);
							break OUTSIDE;
						}
					}
				}
			}
		}
		Collections.sort(first);
		Collections.sort(second);
		for (int i = first.size() - 1; i >= 0; i--)
			System.out.print(first.get(i) + " ");
		for (int i = second.size() - 1; i >= 0; i--)
			System.out.print(second.get(i) + " ");
		scan.close();
	}
}
