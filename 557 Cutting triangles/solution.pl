#!/usr/bin/perl -w

# Solved in plain perl for the fun of it.
# We have: 1/a + 1/s = 1/(a+b) + 1/(a+c).
# So, we are looking for collisions in 1/a + 1/s rational space
# 1<=a<=s<=N, and we sum up all s.
# That runs in O(N^2) time.
# But infact very long, 4.62s for S(1250). js for 1.14s
$N=(shift || 1250); $S=0;

for($s=1;$s<=$N;$s++) {
  for($a=1;$a<=$s;$a++) {
    $g=gcd($a*$s,$a+$s);
    push @{$AS{($a*$s)/$g}->{($a+$s)/$g}},$s;
  }
}

foreach $a (keys %AS) {
  foreach $b (keys %{$AS{$a}}) {
    $V = $AS{$a}->{$b};
    for($i=1; $i<@$V; $i++) {
      $S += $i * $V->[$i];
    }
  }
}

print "$N $S\n";

sub gcd {
  ($m,$n) = @_;
  while (($r = ($m % $n))) { $m = $n; $n = $r; }
  return $n;
}
