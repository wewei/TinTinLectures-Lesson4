export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const Message = IDL.Record({ 'content' : IDL.Text, 'time' : Time });
  return IDL.Service({
    'claimOwner' : IDL.Func([], [], []),
    'follow' : IDL.Func([IDL.Principal], [], []),
    'follows' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'post' : IDL.Func([IDL.Text], [], []),
    'posts' : IDL.Func([Time], [IDL.Vec(Message)], ['query']),
    'timeline' : IDL.Func([Time], [IDL.Vec(Message)], []),
  });
};
export const init = ({ IDL }) => { return []; };
