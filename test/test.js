
  const response = await fetch('http://175.181.154.150/kics/Case1.php', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nm: '하이루',
      rrno1: "123123",
      rrno2: "1231234",
    }),
  });